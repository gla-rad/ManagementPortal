import { addLangs } from './../../../util/translateHelper';
/*
 * Copyright (c) 2022 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-ir-guide',
  templateUrl: './ir-guide.component.html',
  styleUrls: ['./ir-guide.component.scss']
})
export class IrGuideComponent implements OnInit {

  constructor(public translate: TranslateService) {
    addLangs(translate);
  }

  ngOnInit() {
  }

}
