
INPUT_DIR=tools/ts
OUTPUT_DIR=inst/htmlwidgets

all: $(OUTPUT_DIR)/lib/lobstr.js $(OUTPUT_DIR)/lobstrview.js

$(OUTPUT_DIR)/lib/lobstr.js: $(INPUT_DIR)/lobstr.ts
	tsc --outDir $(OUTPUT_DIR)/lib tools/ts/lobstr.ts 

$(OUTPUT_DIR)/lobstrview.js: $(INPUT_DIR)/lobstrview.ts
	tsc --outDir $(OUTPUT_DIR) tools/ts/lobstrview.ts 

