chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [
        {
            "id": 1,
            "priority": 1,
            "action": { "type": "block" },
            "condition": {
            "urlFilter": "https://secret-hitler.com/static/js/main.09a00839.chunk.js",
            "resourceTypes": ["script"]
            }
        }
        ],
        removeRuleIds: [1]
    });
});