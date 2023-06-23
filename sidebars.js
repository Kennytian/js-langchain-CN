/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    "index",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "getting-started" }],
    },
    {
      type: "category",
      label: "Components",
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "modules" }],
    },
    {
      type: "category",
      label: "Use Cases",
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "use_cases" }],
    },
    {
      type: "category",
      label: "Production",
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "production" }],
    },
    {
      type: "category",
      label: "Ecosystem",
      items: [{ type: "autogenerated", dirName: "ecosystem" }],
    },
    {
      type: "html",
      value: '<img src="https://pic1.zhimg.com/80/v2-31131dcb1732cb5bca7c182c9e8da046_r.jpg" alt="扫我，入群" width="280" height="330"/>'
    }
  ],
};
