const LibraryCreator = {
	start: (blocksJSON, category, text) => {
		let blockArray = new Array;
		// LibraryCreator 가져오기
		Entry.staticBlocks = [
			{
				category: 'start',
				blocks: [
					'when_run_button_click',
					'when_some_key_pressed',
					'mouse_clicked',
					'mouse_click_cancled',
					'when_object_click',
					'when_object_click_canceled',
					'when_message_cast',
					'message_cast',
					'message_cast_wait',
					'when_scene_start',
					'start_scene',
					'start_neighbor_scene',
					'check_object_property',
					'check_block_execution',
					'switch_scope',
					'is_answer_submited',
					'check_lecture_goal',
					'check_variable_by_name',
					'show_prompt',
					'check_goal_success',
					'positive_number',
					'negative_number',
					'wildcard_string',
					'wildcard_boolean',
					'register_score',
				],
			},
			{
				category: 'flow',
				blocks: [
					'wait_second',
					'repeat_basic',
					'repeat_inf',
					'repeat_while_true',
					'stop_repeat',
					'_if',
					'if_else',
					'wait_until_true',
					'stop_object',
					'restart_project',
					'when_clone_start',
					'create_clone',
					'delete_clone',
					'remove_all_clones',
				],
			},
			{
				category: 'moving',
				blocks: [
					'move_direction',
					'bounce_wall',
					'move_x',
					'move_y',
					'move_xy_time',
					'locate_x',
					'locate_y',
					'locate_xy',
					'locate_xy_time',
					'locate',
					'locate_object_time',
					'rotate_relative',
					'direction_relative',
					'rotate_by_time',
					'direction_relative_duration',
					'rotate_absolute',
					'direction_absolute',
					'see_angle_object',
					'move_to_angle',
				],
			},
			{
				category: 'looks',
				blocks: [
					'show',
					'hide',
					'dialog_time',
					'dialog',
					'remove_dialog',
					'change_to_some_shape',
					'change_to_next_shape',
					'add_effect_amount',
					'change_effect_amount',
					'erase_all_effects',
					'change_scale_size',
					'set_scale_size',
					'flip_x',
					'flip_y',
					'change_object_index',
				],
			},
			{
				category: 'brush',
				blocks: [
					'brush_stamp',
					'start_drawing',
					'stop_drawing',
					'set_color',
					'set_random_color',
					'change_thickness',
					'set_thickness',
					'change_brush_transparency',
					'set_brush_tranparency',
					'brush_erase_all',
				],
			},
			{
				category: 'text',
				blocks: ['text_read', 'text_write', 'text_append', 'text_prepend', 'text_flush'],
			},
			{
				category: 'sound',
				blocks: [
					'sound_something_with_block',
					'sound_something_second_with_block',
					'sound_from_to',
					'sound_something_wait_with_block',
					'sound_something_second_wait_with_block',
					'sound_from_to_and_wait',
					'sound_volume_change',
					'sound_volume_set',
					'sound_silent_all',
				],
			},
			{
				category: 'judgement',
				blocks: [
					'is_clicked',
					'is_press_some_key',
					'reach_something',
					'boolean_basic_operator',
					'boolean_and_or',
					'boolean_not',
				],
			},
			{
				category: 'calc',
				blocks: [
					'calc_basic',
					'calc_rand',
					'coordinate_mouse',
					'coordinate_object',
					'get_sound_volume',
					'quotient_and_mod',
					'calc_operation',
					'get_project_timer_value',
					'choose_project_timer_action',
					'set_visible_project_timer',
					'get_date',
					'distance_something',
					'get_sound_duration',
					'get_user_name',
					'length_of_string',
					'combine_something',
					'char_at',
					'substring',
					'index_of_string',
					'replace_string',
					'change_string_case',
				],
			},
			{
				category: 'variable',
				blocks: [
					'variableAddButton',
					'listAddButton',
					'ask_and_wait',
					'get_canvas_input_value',
					'set_visible_answer',
					'get_variable',
					'change_variable',
					'set_variable',
					'show_variable',
					'hide_variable',
					'value_of_index_from_list',
					'add_value_to_list',
					'remove_value_from_list',
					'insert_value_to_list',
					'change_value_list_index',
					'length_of_list',
					'is_included_in_list',
					'show_list',
					'hide_list',
				],
			},
			{
				category: 'func',
				blocks: ['functionAddButton'],
			},
			{
				category: 'analysis',
				blocks: [
					'analizyDataAddButton',
					'append_row_to_table',
					'insert_row_to_table',
					'delete_row_from_table',
					'set_value_from_table',
					'get_table_count',
					'get_value_from_table',
					'calc_values_from_table',
					'open_table_chart',
					'close_table_chart',
				],
			},
			{
				category: 'ai_utilize',
				blocks: [
					'aiUtilizeBlockAddButton',
					'aiUtilizeModelTrainButton',
					'audio_title',
					'check_microphone',
					'speech_to_text_convert',
					'speech_to_text_get_value',
					'get_microphone_volume',
					'tts_title',
					'read_text',
					'read_text_wait_with_block',
					'set_tts_property',
					'translate_title',
					'get_translated_string',
					'check_language',
					'video_title',
					'video_draw_webcam',
					'video_check_webcam',
					'video_flip_camera',
					'video_set_camera_opacity_option',
					'video_motion_value',
					'video_toggle_model',
					'video_is_model_loaded',
					'video_number_detect',
					'video_toggle_ind',
					'video_body_part_coord',
					'video_face_part_coord',
					'video_detected_face_info',
				],
			},
			{
				category: 'expansion',
				blocks: [
					'expansionBlockAddButton',
					'weather_title',
					'check_weather',
					'check_finedust',
					'get_weather_data',
					'get_current_weather_data',
					'get_today_temperature',
					'check_city_weather',
					'check_city_finedust',
					'get_city_weather_data',
					'get_current_city_weather_data',
					'get_today_city_temperature',
					'festival_title',
					'count_festival',
					'get_festival_info',
					'behaviorConductDisaster_title',
					'count_disaster_behavior',
					'get_disaster_behavior',
					'behaviorConductLifeSafety_title',
					'count_lifeSafety_behavior',
					'get_lifeSafety_behavior',
				],
			},
			{
				category: 'arduino',
				blocks: [
					'arduino_reconnect',
					'arduino_open',
					'arduino_cloud_pc_open',
					'arduino_connect',
					'arduino_download_connector',
					'download_guide',
					'arduino_download_source',
					'arduino_noti',
				].concat(EntryStatic.DynamicHardwareBlocks),
			}
		];
		EntryStatic.getAllBlocks = () => {
			return Entry.staticBlocks;
		}
		function updateCategory(category, options) {
			Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
				{ category: 'start', visible: true },
				{ category: 'flow', visible: true },
				{ category: 'moving', visible: true },
				{ category: 'looks', visible: true },
				{ category: 'brush', visible: true },
				{ category: 'text', visible: true },
				{ category: 'sound', visible: true },
				{ category: 'judgement', visible: true },
				{ category: 'calc', visible: true },
				{ category: 'variable', visible: true },
				{ category: 'func', visible: true },
				{ category: 'analysis', visible: true },
				{ category: 'ai_utilize', visible: true },
				{ category: 'expansion', visible: true },
				{ category: category, visible: true },
				{ category: 'arduino', visible: true }
			]);
			for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
				if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == "entryCategorytext")) {
					$($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
				}
			}
			Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
			Entry.playground.blockMenu._generateCategoryCode(category);
			if (options) {
				if (options.background) {
					$(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
					$(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
					if (options.backgroundSize) {
						$(`#entryCategory${category}`).css('background-size', options.backgroundSize + "px");
					}
				}
				if (options.name) {
					$(`#entryCategory${category}`)[0].innerText = options.name;
				}
			}
		}
		function addBlock(blockname, template, color, params, _class, func, skeleton = 'basic') {
			Entry.block[blockname] = {
				color: color.color,
				fontColor: color.font,
				outerLine: color.outline,
				skeleton: skeleton,
				statement: [],
				params: params.params,
				events: {},
				def: {
					params: params.define,
					type: blockname
				},
				paramsKeyMap: params.map,
				class: _class ? _class : 'default',
				func: func,
				template: template
			}
		}
		// 블록 추가하기
		for (let i in blocksJSON) {
			let block = blocksJSON[i];
			blockArray.push(block.name);
			addBlock(block.name, block.template, { color: block.color.default, outerLine: block.color.darken }, { params: block.params, define: block.def, map: block.map }, block.class, block.func, block.skeleton);
		}
		// 블록 반영
		Entry.staticBlocks.push({ category: category, blocks: blockArray });
		// 카테고리 업데이트 (ws에서만)
		if (Entry.getMainWS()) {
			updateCategory(category);
			// 아이콘 적용
			$('head').append(`<style>#entryCategory${category}{background-image:url(https://raw.githack.com/HappyProgrammingOne/HappyBlock/main/images/icon.svg);background-repeat:no-repeat;margin-bottom:1px;background-position-y: 10px;background-size: 20px;}.entrySelectedCategory#entryCategory${category}{background-image:url(https://raw.githack.com/HappyProgrammingOne/HappyBlock/main/images/icon_selected.svg);background-color:#F4DF87;border-color:##F4DF87;color:#fff}</style>`);
			// 카테고리 이름 적용;
			$(`#entryCategory${category}`).append(text);
		}
	}
}
// 클립보드 복사 함수
function copy(val) {
	var dummy = document.createElement("textarea");
	document.body.appendChild(dummy);
	dummy.value = val;
	dummy.select();
	try {
		document.execCommand("copy");
	}
	catch {
		alert('복사하기를 지원하지 않습니다.');
	}
	finally {
		document.body.removeChild(dummy);
	}
}
const blocks = [
	{
		name: 'HappyBlock_Webblocks',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Web(웹)',
				color: EntryStatic.colorSet.common.TEXT,
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
	{
		name: 'HappyBlock_OpenUrl',
		template: '%1 사이트 열기(일반)%2',
		skeleton: 'basic',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['https://playentry.org']
			},
			null
		],
		map: {
			WEBSITE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			open(script.getValue('WEBSITE', script));
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_OpenUrlSafeMode',
		template: '%1 사이트 열기(물어보기)%2',
		skeleton: 'basic',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['https://playentry.org']
			},
			null
		],
		map: {
			WEBSITESAFEMODE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			if (confirm(script.getValue('WEBSITESAFEMODE', script) + ' 사이트를 열려 합니다. 여시겠습니까?')) {
				open(script.getValue('WEBSITESAFEMODE', script));
			}
			else {
				alert('사용자가 취소를 클릭하여 열기가 취소되었습니다.');
			}
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_SetPageTitle',
		template: '페이지 제목을 %1로 바꾸기%2',
		skeleton: 'basic',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['엔트리']
			},
			null
		],
		map: {
			PAGETITLE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			document.title = script.getValue('PAGETITLE', script);
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_GetPageTitle',
		template: '페이지 제목',
		skeleton: 'basic_string_field',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [],
		def: [],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			let pagetitle = document.title;
			return pagetitle;
		},
	},
	{
		name: 'HappyBlock_OpenUserPage',
		template: '%1 ID 유저의 마이페이지 열기%2',
		skeleton: 'basic',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['618bcca1b13535485659bbf4']
			},
			null
		],
		map: {
			USERID: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			open('https://playentry.org/profile/' + script.getValue('USERID', script));
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_OpenUserPage',
		template: '%1 ID 유저의 마이페이지 열기%2',
		skeleton: 'basic',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['60268d6a848c53630db479c5']
			},
			null
		],
		map: {
			USERNAME: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			open('https://playentry.org/profile/' + script.getValue('USERNAME', script));
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_Getminute2',
		template: '현재 2자리 분',
		skeleton: 'basic_string_field',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [],
		def: [],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			let today1 = new Date();
			let minutes = today1.getMinutes();
			if (minutes < 10) {
				minutes = "0" + minutes;
			}
			return minutes;
		},
	},
	{
		name: 'HappyBlock_Getsecond2',
		template: '현재 2자리 초',
		skeleton: 'basic_string_field',
		color: {
			default: '#15b01a',
			darken: '#15b01a'
		},
		params: [],
		def: [],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			let today2 = new Date();
			let seconds = today2.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
			return seconds;
		},
	},
	{
		name: 'HappyBlock_SearchBlocks',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Search(검색)',
				color: EntryStatic.colorSet.common.TEXT,
				class: 'bold',
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
	{
		name: 'HappyBlock_SearchEntryCommunityFree',
		template: '%1을(를) %2에 검색하기%3',
		skeleton: 'basic',
		color: {
			default: '#33aa5f',
			darken: '#33aa5f'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Dropdown',
				options: [
					['묻고 답하기', 'community/qna/list/1?query='],
					['노하우&팁', 'community/tips/list?query='],
					['엔트리 이야기', 'community/entrystory/list?query='],
					['제안 및 건의', 'suggestion/list/done/1?filter=all&sort=doneDate&query=']
				],
				fontSize: 11,
				arrowColor: '#268248',
				value: 'community/qna/list/1?query='
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['엔트리']
			},
			null,
			null
		],
		map: {
			SEARCHRESULT1: 0,
			COMMUNITY: 1
		},
		class: 'text',
		func: async (sprite, script) => {
			open('https://playentry.org/' + script.getValue('COMMUNITY', script) + script.getValue('SEARCHRESULT1', script));
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_Search',
		template: '%1을(를) %2에 검색하기%3',
		skeleton: 'basic',
		color: {
			default: '#33aa5f',
			darken: '#33aa5f'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Dropdown',
				options: [
					['구글', 'www.google.com/search?q='],
					['네이버', 'search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query='],
					['네이트', 'search.daum.net/nate?thr=sbma&w=tot&q='],
					['다음', 'search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q='],
					['나무위키', 'namu.wiki/w/'],
					['Bing', 'www.bing.com/search?q='],
					['DuckDuckGo', 'duckduckgo.com/?q='],
					['Yahoo!', 'search.yahoo.com/search?p='],
					['Youtube', 'www.youtube.com/results?search_query='],
					['zum', 'search.zum.com/search.zum?method=uni&option=accu&rd=1&query=']
				],
				fontSize: 11,
				arrowColor: '#268248',
				value: 'www.google.com/search?q='
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['엔트리']
			},
			null,
			null
		],
		map: {
			SEARCHRESULT1: 0,
			SEARCHENGINE: 1
		},
		class: 'text',
		func: async (sprite, script) => {
			open('https://' + script.getValue('SEARCHENGINE', script) + script.getValue('SEARCHRESULT1', script));
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_JsonBlocks',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'JSON',
				color: EntryStatic.colorSet.common.TEXT,
				class: 'bold',
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
	{
		name: 'HappyBlock_JsonKey',
		template: 'JSON %1 의 %2 항목',
		skeleton: 'basic_string_field',
		color: {
			default: '#383838',
			darken: '#383838'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: [`{ "title": "Hello, world!" }`]
			},
			{
				type: 'text',
				params: ['title']
			}
		],
		map: {
			JSON: 0,
			KEY: 1
		},
		class: 'text',
		func: async (sprite, script) => {
			let json = eval(script.getValue('JSON', script));
			let done = json[script.getValue('KEY', script)];
			return done;
		},
	},
	{
		name: 'HappyBlock_StringToJSON',
		template: '%1을(를) JSON으로 변환',
		skeleton: 'basic_string_field',
		color: {
			default: '#383838',
			darken: '#383838'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: [`{ "title": "Hello, world!" }`]
			}
		],
		map: {
			STRINGTOJSON: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			let StringToJSON = JSON.parse(script.getValue('STRINGTOJSON', script));
			return StringToJSON;
		},
	},
	{
		name: 'HappyBlock_ConsoleBlocks',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Console(콘솔)',
				color: EntryStatic.colorSet.common.TEXT,
				class: 'bold',
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
	{
		name: 'HappyBlock_Console',
		template: '%1을(를) 브라우저 콘솔에 %2 하기%3',
		skeleton: 'basic',
		color: {
			default: '#d15000',
			darken: '#d15000'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Dropdown',
				options: [
					['로그', 'log'],
					['경고', 'warn'],
					['오류', 'error'],
					['알림', 'info']
				],
				fontSize: 11,
				arrowColor: '#f78640',
				value: 'log'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: [`Hello Entry!`]
			},
			null,
			null
		],
		map: {
			CONTENT: 0,
			TYPE: 1
		},
		class: 'text',
		func: async (sprite, script) => {
			console[script.getValue('TYPE', script)](script.getValue('CONTENT', script));
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_ConsoleClear',
		template: '브라우저 콘솔 모두 지우기%1',
		skeleton: 'basic',
		color: {
			default: '#d15000',
			darken: '#d15000'
		},
		params: [
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			null
		],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			console.clear();
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_StartJS',
		template: '%1 코드를 실행하기%2',
		skeleton: 'basic',
		color: {
			default: '#d15000',
			darken: '#d15000'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: [`console.log('콘솔 출력');`]
			},
			null
		],
		map: {
			STARTJSCODE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			try {
				eval(script.getValue('STARTJSCODE', script));
			}
			catch (err) {
				alert('다음 오류가 발생하여 실행에 실패하였습니다. 내용: ' + err);
			}
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_JSalert',
		template: '%1을(를) alert 창으로 띄우기%2',
		skeleton: 'basic',
		color: {
			default: '#d15000',
			darken: '#d15000'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: [`Hello Entry!`]
			},
			null
		],
		map: {
			MESSAGEVALUE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			alert(script.getValue('MESSAGEVALUE', script));
		},
	},
	{
		name: 'HappyBlock_JSprompt',
		template: '%1을(를) prompt 창으로 띄우기',
		skeleton: 'basic_string_field',
		color: {
			default: '#d15000',
			darken: '#d15000'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: [`Hello Entry!`]
			}
		],
		map: {
			PROMPTVALUE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			let promptvalue = prompt(script.getValue('PROMPTVALUE', script));
			return promptvalue;
		},
	},
	{
		name: 'HappyBlock_JSconfirm',
		template: '%1 내용의 confirm 창에서 확인을 눌렀는가?',
		skeleton: 'basic_string_field',
		color: {
			default: '#d15000',
			darken: '#d15000'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: [`확인과 취소 중에서 선택하세요.`]
			}
		],
		map: {
			CONFIRMVALUE: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			let confirmvalue = confirm(script.getValue('CONFIRMVALUE', script));
			return confirmvalue;
		},
	},
// 	{
// 		name: 'HappyBlock_BoostModeBlocks',
// 		template: '%1',
// 		skeleton: 'basic_text',
// 		color: {
// 			default: EntryStatic.colorSet.common.TRANSPARENT,
// 			darken: EntryStatic.colorSet.common.TRANSPARENT
// 		},
// 		params: [
// 			{
// 				type: 'Text',
// 				text: 'Boost Mode(부스트 모드)',
// 				color: EntryStatic.colorSet.common.TEXT,
// 				class: 'bold',
// 				align: 'center'
// 			}
// 		],
// 		def: [],
// 		map: {},
// 		class: 'text'
// 	},
// 	{
// 		name: 'HappyBlock_BoostMode',
// 		template: '부스트 모드가 켜져 있는가?',
// 		skeleton: 'basic_boolean_field',
// 		color: {
// 			default: '#850bb5',
// 			darken: '#850bb5'
// 		},
// 		params: [],
// 		def: [],
// 		map: {},
// 		class: 'text',
// 		func: async (sprite, script) => {
// 			(typeof useWebGL == 'undefined') ? false : useWebGL == true ? true : false;
// 		},
// 	},
// 	{
// 		name: 'HappyBlock_MathBlocks',
// 		template: '%1',
// 		skeleton: 'basic_text',
// 		color: {
// 			default: EntryStatic.colorSet.common.TRANSPARENT,
// 			darken: EntryStatic.colorSet.common.TRANSPARENT
// 		},
// 		params: [
// 			{
// 				type: 'Text',
// 				text: 'Math(계산)',
// 				color: EntryStatic.colorSet.common.TEXT,
// 				class: 'bold',
// 				align: 'center'
// 			}
// 		],
// 		def: [],
// 		map: {},
// 		class: 'text'
// 	},
// 	{
// 		name: 'HappyBlock_MathMaxAndMin',
// 		template: '%1리스트의 %2',
// 		skeleton: 'basic_string_field',
// 		color: {
// 			default: '#edaa00',
// 			darken: '#edaa00'
// 		},
// 		params: [
// 			{
// 				type: 'Block',
// 				accept: 'string'
// 			},
// 			{
// 				type: 'Dropdown',
// 				options: [
// 					['최댓값', 'max'],
// 					['최솟값', 'min']
// 				],
// 				fontSize: 11,
// 				arrowColor: '#bd8700',
// 				value: 'max'
// 			}
// 		],
// 		def: [
// 			{
// 				type: 'text',
// 				params: [`리스트`]
// 			},
// 			null
// 		],
// 		map: {
// 			VALUE: 0,
// 			MAXORMIN: 1
// 		},
// 		class: 'text',
// 		func: async (sprite, script) => {
// 			const list = Entry.variableContainer.getListByName(script.getValue("ENTRYDELETELISTNAME"));
// 			if ((script.getValue('MAXORMIN', script)) == 'max') {
// 				return Math.max(...list.getArray());
// 			} else if ((script.getValue('MAXORMIN', script)) == 'min') {
// 				return Math.min(...list.getArray());
// 			}
// 		},
// 	},
	{
		name: 'HappyBlock_ValueBlocks',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Value(변수/리스트)',
				color: EntryStatic.colorSet.common.TEXT,
				class: 'bold',
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
	{
		name: 'HappyBlock_ChangeVar',
		template: '변수 %1 값을 %2 으로 변경%3',
		skeleton: 'basic',
		color: {
			default: '#1dbfa1',
			darken: '#1dbfa1'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: [`user.username`]
			},
			{
				type: 'text',
				params: ['entry']
			},
			null
		],
		map: {
			VARNAME: 0,
			VALUE: 1
		},
		class: 'text',
		func: async (sprite, script) => {
			eval(`${script.getValue('VARNAME', script)} = '${script.getValue('VALUE', script)}'`);
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_ChangeEntryVar',
		template: '엔트리 변수 %1 값을 %2 으로 변경%3',
		skeleton: 'basic',
		color: {
			default: '#1dbfa1',
			darken: '#1dbfa1'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: [`변수`]
			},
			{
				type: 'text',
				params: ['0']
			},
			null
		],
		map: {
			ENTRYVARNAME: 0,
			ENTRYVALUE: 1
		},
		class: 'text',
		func: async (sprite, script) => {
			Entry.variableContainer.getVariableByName(script.getValue('ENTRYVARNAME', script)).value_ = script.getValue('ENTRYVARVALUE', script);
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_AddEntryListArray',
		template: '엔트리 리스트 %1에 %2 추가하기%3',
		skeleton: 'basic',
		color: {
			default: '#1dbfa1',
			darken: '#1dbfa1'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: [`리스트`]
			},
			{
				type: 'text',
				params: ['0']
			},
			null
		],
		map: {
			ENTRYADDLISTNAME: 0,
			ENTRYADDLISTARRAY: 1
		},
		class: 'text',
		func: async (sprite, script) => {
			Entry.variableContainer.getListByName(script.getValue('ENTRYADDLISTNAME', script)).appendValue(script.getValue('ENTRYADDLISTARRAY', script));
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_ChangeEntryListArray',
		template: '엔트리 리스트 %1의 %2번째 항목을 %3 으로 변경%4',
		skeleton: 'basic',
		color: {
			default: '#1dbfa1',
			darken: '#1dbfa1'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: [`리스트`]
			},
			{
				type: 'text',
				params: ['1']
			},
			{
				type: 'text',
				params: ['0']
			},
			null
		],
		map: {
			ENTRYCHANGELISTNAME: 0,
			ENTRYCHANGELISTINDEX: 1,
			ENTRYCHANGELISTARRAY: 2
		},
		class: 'text',
		func: async (sprite, script) => {
			const ChangeList = Entry.variableContainer.getListByName(script.getValue("ENTRYCHANGELISTNAME"));
			const ChangeIndex = Number(script.getValue("ENTRYCHANGELISTINDEX"));
			const ChangeArray = script.getValue("ENTRYCHANGELISTARRAY");
			ChangeList.replaceValue(ChangeIndex, ChangeArray);
		},
	},
	{
		name: 'HappyBlock_DELETEEntryListArray',
		template: '엔트리 리스트 %1의 모든 항목 삭제하기%2',
		skeleton: 'basic',
		color: {
			default: '#1dbfa1',
			darken: '#1dbfa1'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: [`리스트`]
			},
			null
		],
		map: {
			ENTRYDELETELISTNAME: 0,
		},
		class: 'text',
		func: async (sprite, script) => {
			const DeleteList = Entry.variableContainer.getListByName(script.getValue("ENTRYDELETELISTNAME"));
			while(DeleteList.getArray().length > 0){
				DeleteList.deleteValue(1);
			} 
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_FindEntryListArray',
		template: '엔트리 리스트 %1에 %2가 포함되어 있을 때 그 위치',
		skeleton: 'basic_string_field',
		color: {
			default: '#1dbfa1',
			darken: '#1dbfa1'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Block',
				accept: 'string'
			}
		],
		def: [
			{
				type: 'text',
				params: [`리스트`]
			},
			{
				type: 'text',
				params: ['엔트리']
			}
		],
		map: {
			ENTRYFINDLISTNAME: 0,
			ENTRYFINDLISTSTRING: 1
		},
		class: 'text',
		func: async (sprite, script) => {
			let list = Entry.variableContainer.getListByName(script.getValue('ENTRYFINDLISTNAME', script));
			if (!list) {
				return null;
			}
			const arr = list.getArray();
			const data = script.getValue('ENTRYFINDLISTSTRING', script);
			for (let i = 0, len = arr.length; i < len; i++) {
				if (arr[i].data.toString() == data.toString()) {
					return i + 1;
				}
			}
			return null;
		},
	},
	{
		name: 'HappyBlock_BlockFindChange',
		template: '블럭 감지 활성화(해피블럭로딩 변수 값을 1로 변경)%1',
		skeleton: 'basic',
		color: {
			default: '#1dbfa1',
			darken: '#1dbfa1'
		},
		params: [
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			null
		],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			Entry.variableContainer.getVariableByName('해피블럭로딩').value_ = 1;
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_ComputerBlocks',
		template: '%1',
		skeleton: 'basic_text',
		color: {
			default: EntryStatic.colorSet.common.TRANSPARENT,
			darken: EntryStatic.colorSet.common.TRANSPARENT
		},
		params: [
			{
				type: 'Text',
				text: 'Computer(컴퓨터)',
				color: EntryStatic.colorSet.common.TEXT,
				class: 'bold',
				align: 'center'
			}
		],
		def: [],
		map: {},
		class: 'text'
	},
	{
		name: 'HappyBlock_CopytoClipboard',
		template: '%1 내용을 클립보드에 복사하기%2',
		skeleton: 'basic',
		color: {
			default: '#00b6b1',
			darken: '#00b6b1'
		},
		params: [
			{
				type: 'Block',
				accept: 'string'
			},
			{
				type: 'Indicator',
				img: 'block_icon/start_icon_play.svg',
				size: 11,
			}
		],
		def: [
			{
				type: 'text',
				params: ['엔트리']
			},
			null
		],
		map: {
			TEXTTOCOPY: 0
		},
		class: 'text',
		func: async (sprite, script) => {
			copy(script.getValue('TEXTTOCOPY', script));
			return script.callReturn();
		},
	},
	{
		name: 'HappyBlock_GetBrowser',
		template: '브라우저 이름',
		skeleton: 'basic_string_field',
		color: {
			default: '#00b6b1',
			darken: '#00b6b1'
		},
		params: [],
		def: [],
		map: {},
		class: 'text',
		func: async (sprite, script) => {
			return Entry.userAgent
		},
	}
]
LibraryCreator.start(blocks, 'API', '해피');
async function HappyBlockLoad() {
	if(Entry.getMainWS() && Entry.projectId) {
		const TempProjectId = Entry.projectId;
		const ExportedProject = Entry.exportProject();
		const ProjectData = await (await fetch(`https://playentry.org/api/project/${Entry.projectId}`)).json();
		Entry.clearProject();
		Entry.loadProject(Object.keys(ExportedProject).reduce((acc, cur) => {
			acc[cur] = ProjectData[cur];
			return acc;
		}, {}));
		Entry.projectId = TempProjectId;
	}
}
// 오류로 잠시 중단
// HappyBlockLoad();
console.clear();
console.log('%cHappy Block 1.1.0%c\n\n해프밍(happyprogramming)의 해피 블럭을 사용해주셔서 감사합니다.\n이 블럭은 62045님의 특급 블럭을 사용하여 제작하였습니다.\nhttps://github.com/entry62045/expressblock\n\n%c엔트리 : https://playentry.org/entry62045\nGitHub : https://github.com/entry62045\n특급 블럭 : https://github.com/entry62045/expressblock', 'font-family: 맑은 고딕; color: #ffffff; background-color: #66AA33; border-radius: 20px; font-size: 26px; padding : 20px 30px', 'color: #000000; background-color: #FFFFFF; font-size: 17px;', 'color: #000000; background-color: #FFFFFF; font-size: 15px;');
