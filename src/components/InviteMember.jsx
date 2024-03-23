import { useEffect, useRef } from "react"
import Client from "../services/api"
const InviteMember = ({ userId, teamId, members }) => {
  const email = useRef("")

  const invite = async () => {
    const teamMembers = members?.map((member) => member.email)
    if (!teamMembers.includes(email.current.value)) {
      const invite = {
        sender: userId,
        member: email.current.value,
<<<<<<< HEAD
        team: teamId,
=======
        team: teamId
>>>>>>> df51c89a1b9b27d5d97eccf146aed4250e4f7a14
      }
      console.log(invite)
      const res = await Client.post("/invites", invite)
      console.log(res)

      email.current.value = ""
    } else {
      console.log("already a member")
    }
  }

  return (
    <div>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Member's Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          ref={email}
        />
      </div>
      <button
        onClick={invite}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Send
      </button>
    </div>
  )
}

export default InviteMember
