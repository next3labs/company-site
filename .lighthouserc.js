module.exports = {
  ci: {
    collect: {
      // Static directory to audit
      staticDistDir: './_site',
      // URLs to test
      url: [
        'http://localhost/index.html',
        'http://localhost/about/index.html',
        'http://localhost/services/index.html',
        'http://localhost/contact/index.html',
      ],
    },
    assert: {
      // Performance thresholds
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      // Configure where to send results (optional)
      target: 'temporary-public-storage',
    },
  },
};
