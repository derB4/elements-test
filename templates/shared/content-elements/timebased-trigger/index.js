const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withFile(require("./template.twig"))
  .withElementId("timebased-trigger-mO9Z1B")
  .withLabel("Zeitgesteuerter Link")
  .withIcon(Icon.ASTERISK)
  .withParts(
    cx.part.plainText
      .withId("delay-wnR8CR")
      .withLabel("Ausführung nach (in ms)"),
    cx.part.link.withId("link-NOxBEU").withLabel("Link")
  );
