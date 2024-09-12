Approach:
Project Setup: I initialized the project using React, TypeScript, and Redux Toolkit. This provided strong type safety and a streamlined way to manage the application state. I used createSlice to handle the user data and filter logic in Redux.

Fetching Users: I utilized the GET /users endpoint from JSONPlaceholder to fetch user data and stored it in the Redux state. This data was displayed in a table with relevant columns like name, username, email, and phone.

Filtering Functionality: I implemented local filtering by adding input fields for each column (name, username, email, phone) and dynamically updating the filtered data as the user typed. The filter logic leveraged Redux to store the current filters and applied the filter dynamically to the user list.

TypeScript for Type Safety: TypeScript was applied throughout the project to ensure strong typing, from defining the shape of the user data to enforcing types for Redux actions and state. This reduced the risk of runtime errors and helped with auto-completion in the IDE.

Styling: I kept the UI minimalistic, using clean and simple styles for the table and inputs, ensuring a user-friendly and functional design.

Challenges:
Redux Filter Logic: One challenge was designing a flexible filter mechanism that works for multiple columns at once. I overcame this by dynamically applying the filters using Object.entries to loop over all active filters and comparing the user data with filter inputs.

Type Safety with Dynamic Filters: Handling dynamic keys for the filter logic while maintaining TypeScript's type safety required careful casting (key as keyof User) to ensure the types were respected without losing flexibility.

Overall, the approach successfully balanced functionality, type safety, and simplicity.
