
lsv_serialize <- function(obj) {
  children <- lobstr::prim_children(obj)
  list(
     size = as.character(lobstr::prim_size(obj)),
     desc = lobstr::prim_desc(obj),
     type = lobstr::prim_type(obj),
     children = lapply(seq_along(children), function(idx) {
       name <- names(children)[[idx]]
       list (name   = name,
             object = lsv_serialize(children$name))
     })
  )
}
