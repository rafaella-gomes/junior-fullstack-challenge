import { NextApiRequest, NextApiResponse } from 'next';
import { getProjects, modifyProject, deleteProject } from '../../../lib/projectsStore';
import { Project } from '../../../types/project';

export default function handler(req: NextApiRequest, res: NextApiResponse<Project | { message: string } | { error: string }>) {
  const { id } = req.query as { id: string };

  const project = getProjects().find((p) => p.id === id);
  if (!project) return res.status(404).json({ error: 'Project not found' });

  if (req.method === methods.GET) {
    return res.status(200).json(project);
  }

  if (req.method === methods.PUT) {
    const updated = modifyProject(id, req.body);
    return res.status(200).json(updated);
  }

  if (req.method === methods.DELETE) {
    deleteProject(id);
    return res.status(204).json({ message: 'Deleted' });
  }

  res.setHeader('Allow', [methods.GET, methods.PUT, methods.DELETE]);
  return res.status(405).json({ error: 'Method not allowed' });
}
