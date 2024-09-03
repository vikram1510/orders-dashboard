# Overview

* You are provided with an incomplete <Dashboard /> component. Your task is to complete it using the requirements below
* Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1lH8ojlvb62I_9z3jGxhNEY_-8S4trNo7/view?usp=sharing 
* This demo video uses the same dataset, so your total and ranking calculations should match it
* Once this is complete, add your own backend to support this page
* Please record a short [loom](https://www.loom.com/looms/videos) explaining your project and choices
* Submit your zipped project and loom over email to your contact at Safi, along with any feedback on the task.

# Requirements 1

* Once the <Dashboard /> component is mounted, load the order data using the getOrders function imported above
* Once all the data is successfully loaded, hide the loading icon
* Calculate and display the total revenue
* Display a ranking showing the sellers ordered by their total revenue using the <SellerRanking /> component. 
* The seller with the highest revenue should be shown at the top with position 1. 
* All the revenue values should only consider Confirmed orders. Canceled orders should be ignored.
* All dollar amounts should be displayed to 2 decimal places
* The getOrders function times out frequently. Display any errors returned while loading the data in the provided div. 
* The retry button should clear the error and reattempt the request

# Requirements 2

* Once you have completed and committed your changes on the Frontend implement a backend service that returns the list of orders
* You can use whatever backend you are most comfortable with
* It can load the orders.json into memory - no need for a database
* Update the dataService to use this new backend service
* Add the ability to create and remove orders to your service and provide commands to achieve this to the Readme
* Commit your additions along with instructions on how to run your service

# Stretch goals (in no particular order)

* Add your own flare to the system
* eg.
    * Create an Order from the Frontend App
    * Delete an Order from the Frontend App
    * Tests
    * E2E type safety
    * Auth
