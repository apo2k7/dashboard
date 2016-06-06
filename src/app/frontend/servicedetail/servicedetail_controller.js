// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @final
 */
export class ServiceDetailController {
  /**
   * @param {!backendApi.ServiceDetail} serviceDetail
   * @ngInject
   */
  constructor(serviceDetail) {
    /** @export {!backendApi.ServiceDetail} */
    this.serviceDetail = serviceDetail;

    /** @export */
    this.i18n = i18n;
  }
}

const i18n = {
  /** @export {string} @desc Title 'Pods', which appears at the top of the pods list on the
     service detail view. */
  MSG_SERVICE_DETAIL_PODS_TITLE: goog.getMsg('Pods'),
};
