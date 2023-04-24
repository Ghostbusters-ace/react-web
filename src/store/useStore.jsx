import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      receipts: [{ id: 1, title: "x", description: "x" }],

      addReceipts: (receipt) =>
        set((state) => ({
          receipts: [
            {
              title: receipt.title,
              id: Math.random() * 100,
              description: receipt.description,
            },
            ...state.receipts,
          ],
        })),

      removeReceipt: (id) =>
        set((state) => ({
          receipts: state.receipts.filter((receipt) => receipt.id !== id),
        })),
    }),
    {
      name: "receipt", // Nom de l'objet dans le localStorage (Doit être unique)
    }
  )
);
export default useStore;
