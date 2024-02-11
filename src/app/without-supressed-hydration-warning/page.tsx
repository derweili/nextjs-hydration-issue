import LocalizedDateTime from '@/components/LocalizedDateTime'

const PageWithoutSupressedHydrationWarning = () => {
	return (
		<>
			<h2>Localized date <strong>without</strong> supressed hydration warning:</h2>
      <LocalizedDateTime
        eventDate="2024-02-01T11:21:00.000Z"
        supressHydrationWarning={false}
        />
		</>
	)
}

export default PageWithoutSupressedHydrationWarning