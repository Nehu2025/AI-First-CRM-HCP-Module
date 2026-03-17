from langgraph.graph import StateGraph

def log_tool(state):
    print("Logging interaction")
    return state

def edit_tool(state):
    print("Editing interaction")
    return state

workflow = StateGraph(dict)
workflow.add_node("log", log_tool)
workflow.add_node("edit", edit_tool)

workflow.set_entry_point("log")
app_graph = workflow.compile()