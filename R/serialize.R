
lsv_serialize <- function(obj, addrs = c()) {
  children <- lobstr::prim_children(obj)
  list(
     size = as.character(lobstr::prim_size(obj)),
     desc = lobstr::prim_desc(obj),
     type = lobstr::prim_type(obj),
     children = lapply(seq_along(children), function(idx) {
       # skip if address already on stack
       addr <- lobstr::prim_address(children[[idx]])
       if (addr %in% addrs) {
         # TODO: draw/link to reference
         return(NULL)
       }
       
       # extract name
       name <- names(children)[[idx]]
       
       # stop chasing enclosures after the global environment
       if (identical(obj, globalenv())) {
         return(list(
           size = 0, 
           name = name,
           type = environment,
           desc = "(Global Environment)",
           children = list()))
       }
       list (name   = name,
             object = lsv_serialize(children[[idx]], c(addrs, addr)))
     })
  )
}
