browser.menus.create({
    id: "toggle-debug",
    title: "Toggle Windchill &debug",
    contexts: ["all"],
    onclick: toggleDebug
});

function toggleDebug(info, tab) {

    const debugSuffix = "jcaDebug";
    const currentUrl = new URL(tab.url);

    if (currentUrl.searchParams.has(debugSuffix)) {
        currentUrl.searchParams.delete(debugSuffix);
    } else {
        currentUrl.searchParams.set(debugSuffix, "true");
    }

    browser.tabs.update(tab.id, { url: currentUrl.href });

}