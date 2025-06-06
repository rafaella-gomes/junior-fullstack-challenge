import { useState, useEffect, FormEvent } from 'react';
import { Project } from '../types/project';

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState({ title: '', description: '', status: 'Backlog', techStack: [] });

  useEffect(() => {
    fetch('/api/project')
      .then((r) => r.json())
      .then(setProjects);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/project', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, techStack: form.techStack.split(',').map((s) => s.trim()) }),
    });
    if (res.ok) {
      const newProject = await res.json();
      setProjects((prev) => [...prev, newProject]);
      setForm({ title: '', description: '', status: 'Backlog', techStack: '' });
    }
  };

  return (
    <main style={{ maxWidth: 600, margin: '0 auto', padding: 16 }}>
      <h1>Dev Projects Tracker</h1>

      {/* TODO: Improve the form styling and responsiveness */}

      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          style={{ width: '100%', marginBottom: 8 }}
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
          style={{ width: '100%', marginBottom: 8 }}
        />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          style={{ width: '100%', marginBottom: 8 }}
        >
          <option>Backlog</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <input
          placeholder="Tech stack (comma separated)"
          value={form.techStack}
          onChange={(e) => setForm({ ...form, techStack: e.target.value })}
          style={{ width: '100%', marginBottom: 8 }}
        />
        <button type="submit">Add Project</button>
      </form>

      {projects.map((p) => (
        <div style={{ border: '1px solid #ddd', padding: 12, marginBottom: 8 }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p><strong>Status:</strong> {p.status}</p>
          <p><strong>Tech:</strong> {p.techStack.join(', ')}</p>
        </div>
      ))}
    </main>
  );
}
