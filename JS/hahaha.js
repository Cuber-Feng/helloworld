const channel = new BroadcastChannel('tab-control');
const tabId = Date.now().toString();

channel.postMessage({ type: 'new-tab', id: tabId });

channel.onmessage = (event) => {
    if (event.data.type === 'new-tab' && event.data.id !== tabId) {
        alert('Another tab is active. Closing this one.');
        window.close(); // Again, only works for window.open()
    }
};
