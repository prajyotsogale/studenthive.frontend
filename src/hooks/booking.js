export function useCreateBooking() {
    const createBooking = async (bookingForm) => {
        try {
          const authToken = localStorage.getItem("token");
          const response = await fetch(`http://localhost:3001/bookings/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(bookingForm)
          })
    
          console.log(response)

          if(response.ok) {
            console.log(response.ok) ;
            return { status: true }
          }else{
            console.log(response.ok) ;
            return { status: false}
          }
        } catch (err) {
          console.log("Submit Booking Failed.", err.message)
        }
      }
      return { createBooking }
}