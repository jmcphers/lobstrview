#' @import htmlwidgets
#' @export
lobstrview <- function(data, width = NULL, height = NULL) {

  # create the widget
  htmlwidgets::createWidget("lobstrview", 
                            lsv_serialize(data), 
                            width = width, height = height)
}

#' @import htmlwidgets
#' @export
lobstrOutput <- function(outputId, width = "100%", height = "400px") {
  htmlwidgets::shinyWidgetOutput(outputId, "lobstrview", width, height,
                                 package = "lobstrview")
}

#' @import htmlwidgets
#' @export
renderLobstr <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, golOutput, env, quoted = TRUE)
}
