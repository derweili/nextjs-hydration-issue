import LocalizedDateTime from '@/components/LocalizedDateTime'

const PageWithSupressedHydrationWarning = () => {
	return (
		<>
      <h1>Example 3 (both combined on one page)</h1>
			<h2>Localized date <strong>with</strong> supressed hydration warning:</h2>
      <LocalizedDateTime
        eventDate="2024-02-01T11:21:00.000Z"
        supressHydrationWarning={true}
        />
			<h2>Localized date <strong>without</strong> supressed hydration warning:</h2>
      <LocalizedDateTime
        eventDate="2024-02-01T11:21:00.000Z"
        supressHydrationWarning={false}
        />
		</>
	)
}

export default PageWithSupressedHydrationWarning