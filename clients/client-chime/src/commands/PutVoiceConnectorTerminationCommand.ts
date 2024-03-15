// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutVoiceConnectorTerminationRequest,
  PutVoiceConnectorTerminationRequestFilterSensitiveLog,
  PutVoiceConnectorTerminationResponse,
  PutVoiceConnectorTerminationResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  de_PutVoiceConnectorTerminationCommand,
  se_PutVoiceConnectorTerminationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorTerminationCommand}.
 */
export interface PutVoiceConnectorTerminationCommandInput extends PutVoiceConnectorTerminationRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorTerminationCommand}.
 */
export interface PutVoiceConnectorTerminationCommandOutput
  extends PutVoiceConnectorTerminationResponse,
    __MetadataBearer {}

/**
 * <p>Adds termination settings for the specified Amazon Chime Voice Connector.</p>
 *          <note>
 *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off termination settings.</p>
 *          </note>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorTermination.html">PutVoiceConnectorTermination</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by PutVoiceConnectorTermination in the Amazon Chime SDK Voice Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutVoiceConnectorTerminationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutVoiceConnectorTerminationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // PutVoiceConnectorTerminationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   Termination: { // Termination
 *     CpsLimit: Number("int"),
 *     DefaultPhoneNumber: "STRING_VALUE",
 *     CallingRegions: [ // CallingRegionList
 *       "STRING_VALUE",
 *     ],
 *     CidrAllowedList: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     Disabled: true || false,
 *   },
 * };
 * const command = new PutVoiceConnectorTerminationCommand(input);
 * const response = await client.send(command);
 * // { // PutVoiceConnectorTerminationResponse
 * //   Termination: { // Termination
 * //     CpsLimit: Number("int"),
 * //     DefaultPhoneNumber: "STRING_VALUE",
 * //     CallingRegions: [ // CallingRegionList
 * //       "STRING_VALUE",
 * //     ],
 * //     CidrAllowedList: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     Disabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param PutVoiceConnectorTerminationCommandInput - {@link PutVoiceConnectorTerminationCommandInput}
 * @returns {@link PutVoiceConnectorTerminationCommandOutput}
 * @see {@link PutVoiceConnectorTerminationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorTerminationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class PutVoiceConnectorTerminationCommand extends $Command
  .classBuilder<
    PutVoiceConnectorTerminationCommandInput,
    PutVoiceConnectorTerminationCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "PutVoiceConnectorTermination", {})
  .n("ChimeClient", "PutVoiceConnectorTerminationCommand")
  .f(PutVoiceConnectorTerminationRequestFilterSensitiveLog, PutVoiceConnectorTerminationResponseFilterSensitiveLog)
  .ser(se_PutVoiceConnectorTerminationCommand)
  .de(de_PutVoiceConnectorTerminationCommand)
  .build() {}
