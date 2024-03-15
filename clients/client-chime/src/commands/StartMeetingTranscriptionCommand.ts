// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartMeetingTranscriptionRequest, StartMeetingTranscriptionResponse } from "../models/models_1";
import { de_StartMeetingTranscriptionCommand, se_StartMeetingTranscriptionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartMeetingTranscriptionCommand}.
 */
export interface StartMeetingTranscriptionCommandInput extends StartMeetingTranscriptionRequest {}
/**
 * @public
 *
 * The output of {@link StartMeetingTranscriptionCommand}.
 */
export interface StartMeetingTranscriptionCommandOutput extends StartMeetingTranscriptionResponse, __MetadataBearer {}

/**
 * <p>Starts transcription for the specified <code>meetingId</code>. For more information, refer to <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meeting-transcription.html">
 *             Using Amazon Chime SDK live transcription
 *         </a> in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          <p>If you specify an invalid configuration, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon Transcribe.
 *             For more information on each parameter and which combinations are valid, refer to the
 *             <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the
 *             <i>Amazon Transcribe Developer Guide</i>.</p>
 *          <note>
 *             <p>Amazon Chime SDK live transcription is powered by Amazon Transcribe. Use of Amazon Transcribe is subject to the
 *             <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a>, including the terms specific to the AWS Machine Learning and Artificial
 *             Intelligence Services.</p>
 *          </note>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_StartMeetingTranscription.html">StartMeetingTranscription</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                 <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by StartMeetingTranscription in the Amazon Chime SDK Meetings Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, StartMeetingTranscriptionCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, StartMeetingTranscriptionCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // StartMeetingTranscriptionRequest
 *   MeetingId: "STRING_VALUE", // required
 *   TranscriptionConfiguration: { // TranscriptionConfiguration
 *     EngineTranscribeSettings: { // EngineTranscribeSettings
 *       LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR" || "ja-JP" || "ko-KR" || "zh-CN" || "th-TH" || "hi-IN",
 *       VocabularyFilterMethod: "remove" || "mask" || "tag",
 *       VocabularyFilterName: "STRING_VALUE",
 *       VocabularyName: "STRING_VALUE",
 *       Region: "us-east-2" || "us-east-1" || "us-west-2" || "ap-northeast-2" || "ap-southeast-2" || "ap-northeast-1" || "ca-central-1" || "eu-central-1" || "eu-west-1" || "eu-west-2" || "sa-east-1" || "auto",
 *       EnablePartialResultsStabilization: true || false,
 *       PartialResultsStability: "low" || "medium" || "high",
 *       ContentIdentificationType: "PII",
 *       ContentRedactionType: "PII",
 *       PiiEntityTypes: "STRING_VALUE",
 *       LanguageModelName: "STRING_VALUE",
 *       IdentifyLanguage: true || false,
 *       LanguageOptions: "STRING_VALUE",
 *       PreferredLanguage: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR" || "ja-JP" || "ko-KR" || "zh-CN" || "th-TH" || "hi-IN",
 *       VocabularyNames: "STRING_VALUE",
 *       VocabularyFilterNames: "STRING_VALUE",
 *     },
 *     EngineTranscribeMedicalSettings: { // EngineTranscribeMedicalSettings
 *       LanguageCode: "en-US", // required
 *       Specialty: "PRIMARYCARE" || "CARDIOLOGY" || "NEUROLOGY" || "ONCOLOGY" || "RADIOLOGY" || "UROLOGY", // required
 *       Type: "CONVERSATION" || "DICTATION", // required
 *       VocabularyName: "STRING_VALUE",
 *       Region: "us-east-1" || "us-east-2" || "us-west-2" || "ap-southeast-2" || "ca-central-1" || "eu-west-1" || "auto",
 *       ContentIdentificationType: "PHI",
 *     },
 *   },
 * };
 * const command = new StartMeetingTranscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartMeetingTranscriptionCommandInput - {@link StartMeetingTranscriptionCommandInput}
 * @returns {@link StartMeetingTranscriptionCommandOutput}
 * @see {@link StartMeetingTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartMeetingTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class StartMeetingTranscriptionCommand extends $Command
  .classBuilder<
    StartMeetingTranscriptionCommandInput,
    StartMeetingTranscriptionCommandOutput,
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
  .s("UCBuzzConsoleService", "StartMeetingTranscription", {})
  .n("ChimeClient", "StartMeetingTranscriptionCommand")
  .f(void 0, void 0)
  .ser(se_StartMeetingTranscriptionCommand)
  .de(de_StartMeetingTranscriptionCommand)
  .build() {}
