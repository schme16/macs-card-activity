angular.module('Mental Activity Cards', [])

	/*The master controller*/
	.controller('master', ($scope, $sce) => {
		m = $scope

		//Trust a string as renderable HTML
		m.trustAsHtml = $sce.trustAsHtml

		m.cards = [
			{
				title: `Deciding`,
				description: `Debating what to do, what is for the best`,
				image: `deciding.png`,
				colour: `#eb7c31`,
			},
			{
				title: `Re-living`,
				description: `Some event, period or relationship`,
				image: `re-living.png`,
				colour: `#a5a5a5`,
			},
			{
				title: `Prioritising`,
				description: `Working out what matter most, next, or at all to you`,
				image: `prioritising.png`,
				colour: `#fd0000`,
			},
			{
				title: `Clarifying`,
				description: `Sorting out what you think about some issue, person or problem`,
				image: `clarifying.png`,
				colour: `#a8cf8d`,
			},
			{
				title: `Imagining`,
				description: `The future, including ‘what would happen if…”`,
				image: `imagining.png`,
				colour: `#6f309f`,
			},
			{
				title: `Imaginary Conversations`,
				description: `Held with people known to you or whom you know of`,
				image: `imaginary-conversations.png`,
				colour: `#00afee`,
			},
			{
				title: `Budgeting`,
				description: `Estimating whether or not you can afford to do something in terms of money, time or effort`,
				image: `budgeting.png`,
				colour: `#fdbe00`,
			},
			{
				title: `Planning`,
				description: `Day, Week, Year`,
				image: `planning.png`,
				colour: `#4371c2`,
			},
			{
				title: `Rehearsing`,
				description: `Practicing what you will say or do`,
				image: `rehearsing.png`,
				colour: `#d2349e`,
			},
			{
				title: `Mulling Over`,
				description: `Dwelling on the problem`,
				image: `mulling-over.png`,
				colour: `#538135`,
			},
			{
				title: `Knowing`,
				description: `“Knowing” what the right thing to do is`,
				image: `knowing.png`,
				colour: `#8d0000`,
			},
			{
				title: `Considering`,
				description: `Taking into account the experiences of others `,
				image: `considering.png`,
				colour: `#4ff2fa`,
			},
			{
				title: `Comparing`,
				description: `Weighing your own experience alongside the experience of another person`,
				image: `comparing.png`,
				colour: `#caeafd`,
			},
			{
				title: `Weighing up`,
				description: `Best case/worst case scenarios`,
				image: `weighing-up.png`,
				colour: `#d0b0df`,
			},
			{
				title: `Downplaying`,
				description: `Minimising experiences and expectations`,
				image: `downplaying.png`,
				colour: `#c1cec0`,
			},
			{
				title: `Praying`,
				description: `Talking with God about the issue before you`,
				image: `praying.png`,
				colour: `#9898fd`,
			},
			{
				title: `Meditating`,
				description: `Considering future options in the light of one’s faith and spiritual calling`,
				image: `meditating.png`,
				colour: `#b3c5e5`,
			},
			{
				title: `Worrying`,
				description: `Feeling anxious/concerned about present and future plans`,
				image: `worrying.png`,
				colour: `#998fc0`,
			},
			{
				title: `Procrastinating`,
				description: `Putting off taking action/making decisions`,
				image: `procrastinating.png`,
				colour: `#b76be0`,
			},
			{
				title: `Validating`,
				description: `Confirming that own choices are worthwhile`,
				image: `validating.png`,
				colour: `#88c0c3`,
			},
		]
		
	})

	/*Turns off the ng-scope, et al. debug classes*/
	.config([
		'$compileProvider', ($compileProvider) => {
			$compileProvider.debugInfoEnabled(false)
		}
	])


/*Sample directive*/
/*.directive('sampleDirective', () => {
	return {
		restrict: 'A',
		scope: true,
		link: (scope, element, attrs) => {
		
		}
	}
})*/