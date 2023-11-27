// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { ResetLandingZoneInput, ResetLandingZoneOutput } from "../models/models_0";
import { de_ResetLandingZoneCommand, se_ResetLandingZoneCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResetLandingZoneCommand}.
 */
export interface ResetLandingZoneCommandInput extends ResetLandingZoneInput {}
/**
 * @public
 *
 * The output of {@link ResetLandingZoneCommand}.
 */
export interface ResetLandingZoneCommandOutput extends ResetLandingZoneOutput, __MetadataBearer {}

/**
 * @public
 * <p>This API call resets a landing zone. It starts an asynchronous operation that resets the
 *          landing zone to the parameters specified in its original configuration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ResetLandingZoneCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ResetLandingZoneCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // ResetLandingZoneInput
 *   landingZoneIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ResetLandingZoneCommand(input);
 * const response = await client.send(command);
 * // { // ResetLandingZoneOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ResetLandingZoneCommandInput - {@link ResetLandingZoneCommandInput}
 * @returns {@link ResetLandingZoneCommandOutput}
 * @see {@link ResetLandingZoneCommandInput} for command's `input` shape.
 * @see {@link ResetLandingZoneCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 */
export class ResetLandingZoneCommand extends $Command<
  ResetLandingZoneCommandInput,
  ResetLandingZoneCommandOutput,
  ControlTowerClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ResetLandingZoneCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ControlTowerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetLandingZoneCommandInput, ResetLandingZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetLandingZoneCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ControlTowerClient";
    const commandName = "ResetLandingZoneCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSControlTowerApis",
        operation: "ResetLandingZone",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ResetLandingZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResetLandingZoneCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetLandingZoneCommandOutput> {
    return de_ResetLandingZoneCommand(output, context);
  }
}
