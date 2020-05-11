/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AzureWizardPromptStep } from "vscode-azureextensionui";
import { ext } from "../../extensionVariables";
import { localize } from "../../utils/localize";
import { IStaticWebAppWizardContext } from "./IStaticWebAppWizardContext";

export class AppArtifactLocationStep extends AzureWizardPromptStep<IStaticWebAppWizardContext> {
    public async prompt(wizardContext: IStaticWebAppWizardContext): Promise<void> {
        wizardContext.appArtifactLocation = (await ext.ui.showInputBox({
            value: 'build',
            prompt: localize('publishLocation', "Enter the path of your build output relative to your apps location. For example, setting a value of 'build' when your app location is set to 'app' will cause the content at 'app/build' to be served.")
        })).trim();
    }

    public shouldPrompt(wizardContext: IStaticWebAppWizardContext): boolean {
        return !wizardContext.appArtifactLocation;
    }

}
