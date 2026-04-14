const callbacks = {
  onUpdate: async () => {
    try {
      await fetch(
        `${process.env.FRONTEND_URL}/api/send-email/revalidate`,
        {
          headers: {
            "x-revalidation-secret": process.env.REVALIDATION_SECRET,
          },
        }
      );
    } catch (e) {
      console.error(`Failed to revalidate frontend cache: ${e.message}`);
    }
  },
};

export default callbacks;
