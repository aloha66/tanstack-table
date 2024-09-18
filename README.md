# Table Design

## File Struct

```
Table (export component)
	|-- InternalTable (maybe handle init data)
		|-- component (internal table component)
			|-- Table (export html table layer logic)
      |-- Cell (export html cell layer logic)
      |-- Header (export html header layer logic)
      |-- Footer (export html footer layer logic)
      |-- Column (export html column layer logic)
```
