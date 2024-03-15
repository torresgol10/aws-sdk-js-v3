// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeExportConfigurationsRequest, DescribeExportConfigurationsResponse } from "../models/models_0";
import {
  de_DescribeExportConfigurationsCommand,
  se_DescribeExportConfigurationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeExportConfigurationsCommand}.
 */
export interface DescribeExportConfigurationsCommandInput extends DescribeExportConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExportConfigurationsCommand}.
 */
export interface DescribeExportConfigurationsCommandOutput
  extends DescribeExportConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *             <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a>, instead.</p>
 *
 * @deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeExportConfigurationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeExportConfigurationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DescribeExportConfigurationsRequest
 *   exportIds: [ // ExportIds
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeExportConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExportConfigurationsResponse
 * //   exportsInfo: [ // ExportsInfo
 * //     { // ExportInfo
 * //       exportId: "STRING_VALUE", // required
 * //       exportStatus: "FAILED" || "SUCCEEDED" || "IN_PROGRESS", // required
 * //       statusMessage: "STRING_VALUE", // required
 * //       configurationsDownloadUrl: "STRING_VALUE",
 * //       exportRequestTime: new Date("TIMESTAMP"), // required
 * //       isTruncated: true || false,
 * //       requestedStartTime: new Date("TIMESTAMP"),
 * //       requestedEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeExportConfigurationsCommandInput - {@link DescribeExportConfigurationsCommandInput}
 * @returns {@link DescribeExportConfigurationsCommandOutput}
 * @see {@link DescribeExportConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeExportConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified configuration ID was not located. Verify the configuration ID and try
 *       again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 * @public
 */
export class DescribeExportConfigurationsCommand extends $Command
  .classBuilder<
    DescribeExportConfigurationsCommandInput,
    DescribeExportConfigurationsCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPoseidonService_V2015_11_01", "DescribeExportConfigurations", {})
  .n("ApplicationDiscoveryServiceClient", "DescribeExportConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeExportConfigurationsCommand)
  .de(de_DescribeExportConfigurationsCommand)
  .build() {}
