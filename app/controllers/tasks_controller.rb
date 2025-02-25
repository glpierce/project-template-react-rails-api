class TasksController < ApplicationController

    def index
        render json: Task.all
    end

    def create
        task = Task.create!(task_params)
        render json: task, status: 201
    end

    def show 
        task = Task.find(params[:id])
        render json: task, status: 200
    end

    def update
        task = find_task
        task.update!(task_params)
        render json: task, status: 200
    end

    def destroy
        task = find_task
        task.destroy
        head :no_content
    end

    private

    def find_task
        Task.find(params[:id])
    end

    def task_params
        params.permit(:task_name, :last_completed, :frequency, :status, :service_category_id, :property_id)
    end

end
