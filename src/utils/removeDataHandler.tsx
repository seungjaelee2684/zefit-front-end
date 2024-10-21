import { supabase } from "./Supabase";

export const onClickRemoveHandler = (e: any, admData: any, id: any, table: string) => {
    e.preventDefault();

    // admData가 존재하는지 미리 체크
    if (!admData || !id) {
        console.error("admData or admData.id is missing.");
        return;
    }

    const fetchRemove = async () => {
        try {
            const { error } = await supabase
                .from(table)
                .delete()
                .eq('id', id);

            if (error) throw error;

            window.location.pathname = `/adm/${table}`;
        } catch (error) {
            console.error("Error fetching paginated data from Supabase:", error);
        }
    };

    fetchRemove();
};