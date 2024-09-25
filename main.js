browser.tabs.onCreated.addListener((t) => browser.tabs.move(t.id, {index: 0}));
