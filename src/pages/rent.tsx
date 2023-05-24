import { Container, Stack } from "@mantine/core"
import { DatePicker } from "@mantine/dates"
import { showNotification } from "@mantine/notifications"
import { CalendarIcon } from "@modulz/radix-icons"
import { useRouter } from "next/router"
import Button from "../components/button"
import Select from "../components/select"
import TextInput from "../components/text-input"
import Statistics from "../routes/home/statistics"

const listOfCinema = ['Magic Cinema', 'Alisher Navoiy', 'Parus Cinema', 'Royal Cinema', 'Asia Cinema', 'Drive Cinema', 'Yulduz Cinema', 'Cinema']
const SeeAll = () => {
    const router = useRouter()
    return (
        <Container size={'md'} p={'xl'}>
            <form onSubmit={(e) => {
                console.log(e); e.preventDefault();
                showNotification({
                    title: `Chipta band qilish`,
                    message: "Chipta muvaffaqiyatli band qilindi. 🎉",
                    color: 'green'
                });
                setTimeout(() => {
                    router.push('/')
                }, 3000)
            }} style={{ width: 400 }}>
                <Stack>
                    <Select required searchable label={"Kinoteatr nomini kiriting"} placeholder="Kinoteatr nomini kiriting" data={listOfCinema} />
                    <TextInput label="Kino nomini kiriting" placeholder="Kino nomini kiriting" required />
                    <DatePicker
                        name="sana"
                        maxDate={new Date(Date.now())}
                        required={true}
                        icon={<CalendarIcon />}
                        label="Kino vaqtini kiriting"
                        errorProps={{ 'aria-required': 'true' }}
                        placeholder="Kino vaqtini kiriting"
                        aria-required="true"
                    />
                    <TextInput label="Oʻrindiq raqamini kiriting" placeholder="Oʻrindiq raqamini kiriting" required />
                    <Button size="md"
                        sx={{ color: 'black', fontSize: '20px' }}
                        color={'yellow'} type="submit">Yuborish</Button>
                </Stack>
            </form>
        </Container>
    )
}

export default SeeAll