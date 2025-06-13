import handler from "../../../pages/api/projects";
import { createMocks, RequestMethod } from "node-mocks-http";
import { getProjects, addProject } from "../../../lib/projectsStore";
import { Methods } from "../../../types/project";

jest.mock("../../../lib/projectsStore", () => ({
  getProjects: jest.fn(),
  addProject: jest.fn(),
}));

describe("/api/projects API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("GET: deve retornar todos os projetos com status 200", async () => {
    const mockProjects = [
      {
        id: 1,
        title: "Teste",
        description: "Desc",
        status: "active",
        techStack: [],
      },
    ];
    (getProjects as jest.Mock).mockReturnValue(mockProjects);

    const { req, res } = createMocks({
      method: Methods.GET as RequestMethod,
    });

    handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(mockProjects);
  });

  it("POST: deve adicionar projeto válido com status 201", async () => {
    const newProj = {
      id: 2,
      title: "Novo Projeto",
      description: "Descrição",
      status: "active",
      techStack: ["Next.js", "TypeScript"],
    };
    (addProject as jest.Mock).mockReturnValue(newProj);

    const { req, res } = createMocks({
      method: Methods.POST as RequestMethod,
      body: {
        title: newProj.title,
        description: newProj.description,
        status: newProj.status,
        techStack: newProj.techStack,
      },
    });

    handler(req, res);

    expect(res._getStatusCode()).toBe(201);
    expect(JSON.parse(res._getData())).toEqual(newProj);
  });

  it("POST: deve adicionar projeto sem techStack e preencher com array vazio", async () => {
    const newProj = {
      id: 3,
      title: "Projeto sem techStack",
      description: "Descrição",
      status: "active",
      techStack: [],
    };

    (addProject as jest.Mock).mockImplementation((proj) => ({
      id: 3,
      ...proj,
    }));

    const { req, res } = createMocks({
      method: Methods.POST as RequestMethod,
      body: {
        title: newProj.title,
        description: newProj.description,
        status: newProj.status,
      },
    });

    handler(req, res);

    expect(res._getStatusCode()).toBe(201);
    expect(JSON.parse(res._getData())).toEqual(newProj);
  });

  it("POST: deve retornar erro 400 se faltar campo obrigatório", async () => {
    const { req, res } = createMocks({
      method: Methods.POST as RequestMethod,
      body: {
        description: "Sem título",
        status: "active",
      },
    });

    handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({ error: "Missing fields" });
  });

  it("OUTRO MÉTODO: deve retornar 405 para métodos não permitidos", async () => {
    const { req, res } = createMocks({
      method: "DELETE",
    });

    handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(JSON.parse(res._getData())).toEqual({ error: "Method not allowed" });
  });
});
