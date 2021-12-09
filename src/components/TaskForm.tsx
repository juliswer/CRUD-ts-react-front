import {AiOutlinePlus} from 'react-icons/ai'

export default function TaskForm() {
  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>

      <form>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
        />

        <textarea
          name="description"
          rows={2}
          placeholder="Write a description"
          className="form-control mb-3 shadow-none border-0"
        ></textarea>

        <button className="btn btn-primary">
            Save
            <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
