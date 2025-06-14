import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEdit3, FiSave, FiLogOut, FiPlus, FiTrash2, FiEye, FiEyeOff } from 'react-icons/fi';
import { useContent } from '../context/ContentContext';

const Admin = () => {
  const { content, updateContent, isAuthenticated, login, logout } = useContent();
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [editingContent, setEditingContent] = useState(content);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(loginForm.email, loginForm.password);
    if (!success) {
      setLoginError('Invalid credentials. Please try again.');
    } else {
      setLoginError('');
    }
  };

  const handleSave = (section) => {
    updateContent(section, editingContent[section]);
    alert(`${section} content updated successfully!`);
  };

  const addNewsItem = () => {
    const newItem = {
      id: Date.now(),
      title: 'New Article Title',
      content: 'Article content...',
      date: new Date().toISOString().split('T')[0],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800'
    };
    setEditingContent(prev => ({
      ...prev,
      news: [...prev.news, newItem]
    }));
  };

  const removeNewsItem = (id) => {
    setEditingContent(prev => ({
      ...prev,
      news: prev.news.filter(item => item.id !== id)
    }));
  };

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: 'New Project',
      description: 'Project description...',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800',
      status: 'Active'
    };
    setEditingContent(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const removeProject = (id) => {
    setEditingContent(prev => ({
      ...prev,
      projects: prev.projects.filter(item => item.id !== id)
    }));
  };

  const addTeamMember = () => {
    const newMember = {
      id: Date.now(),
      name: 'New Team Member',
      role: 'Position',
      bio: 'Biography...',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=400'
    };
    setEditingContent(prev => ({
      ...prev,
      team: [...prev.team, newMember]
    }));
  };

  const removeTeamMember = (id) => {
    setEditingContent(prev => ({
      ...prev,
      team: prev.team.filter(item => item.id !== id)
    }));
  };

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gray-50 flex items-center justify-center"
      >
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1749834926913-WLA.png" 
              alt="Women Lens Africa" 
              className="h-16 w-auto mx-auto mb-4"
            />
            <h1 className="text-2xl font-marcellus font-bold text-gray-900">
              Admin Access
            </h1>
            <p className="text-gray-600 font-marcellus">
              Please login to access the content management system
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                placeholder="admin@womenlens.africa"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg font-marcellus">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-marcellus font-semibold hover:bg-accent transition-colors"
            >
              Login to Admin Panel
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 font-marcellus">
              Demo credentials: admin@womenlens.africa / WLA2024Admin!
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1749834926913-WLA.png" 
                alt="Women Lens Africa" 
                className="h-8 w-auto"
              />
              <h1 className="text-xl font-marcellus font-bold text-gray-900">
                Content Management System
              </h1>
            </div>
            <button
              onClick={logout}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg font-marcellus font-medium hover:bg-gray-700 transition-colors flex items-center space-x-2"
            >
              <FiLogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'about', label: 'About Page' },
                { id: 'projects', label: 'Projects' },
                { id: 'news', label: 'News' },
                { id: 'team', label: 'Team' },
                { id: 'impact', label: 'Impact Metrics' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-marcellus font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-marcellus font-bold text-gray-900">About Page Content</h2>
                <button
                  onClick={() => handleSave('about')}
                  className="bg-primary text-white px-4 py-2 rounded-lg font-marcellus font-medium hover:bg-accent transition-colors flex items-center space-x-2"
                >
                  <FiSave size={16} />
                  <span>Save Changes</span>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                    Page Title
                  </label>
                  <input
                    type="text"
                    value={editingContent.about.title}
                    onChange={(e) => setEditingContent(prev => ({
                      ...prev,
                      about: { ...prev.about, title: e.target.value }
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                    Mission Statement
                  </label>
                  <textarea
                    rows={4}
                    value={editingContent.about.mission}
                    onChange={(e) => setEditingContent(prev => ({
                      ...prev,
                      about: { ...prev.about, mission: e.target.value }
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                    Vision Statement
                  </label>
                  <textarea
                    rows={4}
                    value={editingContent.about.vision}
                    onChange={(e) => setEditingContent(prev => ({
                      ...prev,
                      about: { ...prev.about, vision: e.target.value }
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={6}
                    value={editingContent.about.description}
                    onChange={(e) => setEditingContent(prev => ({
                      ...prev,
                      about: { ...prev.about, description: e.target.value }
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-marcellus font-bold text-gray-900">Projects Management</h2>
                <div className="flex space-x-3">
                  <button
                    onClick={addProject}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg font-marcellus font-medium hover:bg-green-700 transition-colors flex items-center space-x-2"
                  >
                    <FiPlus size={16} />
                    <span>Add Project</span>
                  </button>
                  <button
                    onClick={() => handleSave('projects')}
                    className="bg-primary text-white px-4 py-2 rounded-lg font-marcellus font-medium hover:bg-accent transition-colors flex items-center space-x-2"
                  >
                    <FiSave size={16} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {editingContent.projects.map((project, index) => (
                  <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-marcellus font-semibold text-gray-900">
                        Project {index + 1}
                      </h3>
                      <button
                        onClick={() => removeProject(project.id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                          Title
                        </label>
                        <input
                          type="text"
                          value={project.title}
                          onChange={(e) => {
                            const updated = editingContent.projects.map(p => 
                              p.id === project.id ? { ...p, title: e.target.value } : p
                            );
                            setEditingContent(prev => ({ ...prev, projects: updated }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                          Status
                        </label>
                        <select
                          value={project.status}
                          onChange={(e) => {
                            const updated = editingContent.projects.map(p => 
                              p.id === project.id ? { ...p, status: e.target.value } : p
                            );
                            setEditingContent(prev => ({ ...prev, projects: updated }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                        >
                          <option value="Active">Active</option>
                          <option value="Completed">Completed</option>
                          <option value="Planned">Planned</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                          Description
                        </label>
                        <textarea
                          rows={3}
                          value={project.description}
                          onChange={(e) => {
                            const updated = editingContent.projects.map(p => 
                              p.id === project.id ? { ...p, description: e.target.value } : p
                            );
                            setEditingContent(prev => ({ ...prev, projects: updated }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'news' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-marcellus font-bold text-gray-900">News Management</h2>
                <div className="flex space-x-3">
                  <button
                    onClick={addNewsItem}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg font-marcellus font-medium hover:bg-green-700 transition-colors flex items-center space-x-2"
                  >
                    <FiPlus size={16} />
                    <span>Add Article</span>
                  </button>
                  <button
                    onClick={() => handleSave('news')}
                    className="bg-primary text-white px-4 py-2 rounded-lg font-marcellus font-medium hover:bg-accent transition-colors flex items-center space-x-2"
                  >
                    <FiSave size={16} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {editingContent.news.map((article, index) => (
                  <div key={article.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-marcellus font-semibold text-gray-900">
                        Article {index + 1}
                      </h3>
                      <button
                        onClick={() => removeNewsItem(article.id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                          Title
                        </label>
                        <input
                          type="text"
                          value={article.title}
                          onChange={(e) => {
                            const updated = editingContent.news.map(n => 
                              n.id === article.id ? { ...n, title: e.target.value } : n
                            );
                            setEditingContent(prev => ({ ...prev, news: updated }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                          Date
                        </label>
                        <input
                          type="date"
                          value={article.date}
                          onChange={(e) => {
                            const updated = editingContent.news.map(n => 
                              n.id === article.id ? { ...n, date: e.target.value } : n
                            );
                            setEditingContent(prev => ({ ...prev, news: updated }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                          Content
                        </label>
                        <textarea
                          rows={4}
                          value={article.content}
                          onChange={(e) => {
                            const updated = editingContent.news.map(n => 
                              n.id === article.id ? { ...n, content: e.target.value } : n
                            );
                            setEditingContent(prev => ({ ...prev, news: updated }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-marcellus font-bold text-gray-900">Team Management</h2>
                <div className="flex space-x-3">
                  <button
                    onClick={addTeamMember}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg font-marcellus font-medium hover:bg-green-700 transition-colors flex items-center space-x-2"
                  >
                    <FiPlus size={16} />
                    <span>Add Member</span>
                  </button>
                  <button
                    onClick={() => handleSave('team')}
                    className="bg-primary text-white px-4 py-2 rounded-lg font-marcellus font-medium hover:bg-accent transition-colors flex items-center space-x-2"
                  >
                    <FiSave size={16} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {editingContent.team.map((member, index) => (
                  <div key={member.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-marcellus font-semibold text-gray-900">
                        Team Member {index + 1}
                      </h3>
                      <button
                        onClick={() => removeTeamMember(member.id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => {
                            const updated = editingContent.team.map(t => 
                              t.id === member.id ? { ...t, name: e.target.value } : t
                            );
                            setEditingContent(prev => ({ ...prev, team: updated }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                          Role
                        </label>
                        <input
                          type="text"
                          value={member.role}
                          onChange={(e) => {
                            const updated = editingContent.team.map(t => 
                              t.id === member.id ? { ...t, role: e.target.value } : t
                            );
                            setEditingContent(prev => ({ ...prev, team: updated }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                          Biography
                        </label>
                        <textarea
                          rows={3}
                          value={member.bio}
                          onChange={(e) => {
                            const updated = editingContent.team.map(t => 
                              t.id === member.id ? { ...t, bio: e.target.value } : t
                            );
                            setEditingContent(prev => ({ ...prev, team: updated }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'impact' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-marcellus font-bold text-gray-900">Impact Metrics</h2>
                <button
                  onClick={() => handleSave('impact')}
                  className="bg-primary text-white px-4 py-2 rounded-lg font-marcellus font-medium hover:bg-accent transition-colors flex items-center space-x-2"
                >
                  <FiSave size={16} />
                  <span>Save Changes</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                    Women Trained
                  </label>
                  <input
                    type="number"
                    value={editingContent.impact.womenTrained}
                    onChange={(e) => setEditingContent(prev => ({
                      ...prev,
                      impact: { ...prev.impact, womenTrained: parseInt(e.target.value) || 0 }
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                    Program Areas
                  </label>
                  <input
                    type="number"
                    value={editingContent.impact.programAreas}
                    onChange={(e) => setEditingContent(prev => ({
                      ...prev,
                      impact: { ...prev.impact, programAreas: parseInt(e.target.value) || 0 }
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                    Communities Served
                  </label>
                  <input
                    type="number"
                    value={editingContent.impact.communities}
                    onChange={(e) => setEditingContent(prev => ({
                      ...prev,
                      impact: { ...prev.impact, communities: parseInt(e.target.value) || 0 }
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-marcellus font-medium text-gray-700 mb-2">
                    Strategic Partnerships
                  </label>
                  <input
                    type="number"
                    value={editingContent.impact.partnerships}
                    onChange={(e) => setEditingContent(prev => ({
                      ...prev,
                      impact: { ...prev.impact, partnerships: parseInt(e.target.value) || 0 }
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-marcellus"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Admin;