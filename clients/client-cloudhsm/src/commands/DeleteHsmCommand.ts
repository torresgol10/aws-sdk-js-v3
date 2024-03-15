// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteHsmRequest, DeleteHsmResponse } from "../models/models_0";
import { de_DeleteHsmCommand, se_DeleteHsmCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteHsmCommand}.
 */
export interface DeleteHsmCommandInput extends DeleteHsmRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHsmCommand}.
 */
export interface DeleteHsmCommandOutput extends DeleteHsmResponse, __MetadataBearer {}

/**
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Deletes an HSM. After completion, this operation cannot be undone and your key material
 *       cannot be recovered.</p>
 *
 * @deprecated This API is deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, DeleteHsmCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, DeleteHsmCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const input = { // DeleteHsmRequest
 *   HsmArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteHsmCommand(input);
 * const response = await client.send(command);
 * // { // DeleteHsmResponse
 * //   Status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteHsmCommandInput - {@link DeleteHsmCommandInput}
 * @returns {@link DeleteHsmCommandOutput}
 * @see {@link DeleteHsmCommandInput} for command's `input` shape.
 * @see {@link DeleteHsmCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for CloudHSMClient's `config` shape.
 *
 * @throws {@link CloudHsmInternalException} (server fault)
 *  <p>Indicates that an internal error occurred.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that one or more of the request parameters are not valid.</p>
 *
 * @throws {@link CloudHSMServiceException}
 * <p>Base exception class for all service exceptions from CloudHSM service.</p>
 *
 * @public
 */
export class DeleteHsmCommand extends $Command
  .classBuilder<
    DeleteHsmCommandInput,
    DeleteHsmCommandOutput,
    CloudHSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudHSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudHsmFrontendService", "DeleteHsm", {})
  .n("CloudHSMClient", "DeleteHsmCommand")
  .f(void 0, void 0)
  .ser(se_DeleteHsmCommand)
  .de(de_DeleteHsmCommand)
  .build() {}
