import { supabase } from "./Supabase";

export const onClickAddHandler = (e: any, insertData: any, table: string) => {
    e.preventDefault();

    const fetchRemove = async () => {
        try {
            const { data, error } = await supabase
                .from(table)
                .insert([
                    insertData,
                ])
                .select()

            if (error) throw error;

            // window.location.pathname = `/adm/${table}`;
        } catch (error) {
            console.error("Error fetching paginated data from Supabase:", error);
        }
    };

    fetchRemove();
};