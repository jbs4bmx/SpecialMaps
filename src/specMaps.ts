/*
 *      Name: Special Maps
 *   Version: 325.0.1
 * Copyright: jbs4bmx
 *    Update: 23.10.2022
*/

import { DependencyContainer } from "tsyringe";
import { IMod } from "@spt-aki/models/external/mod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";


class SpecMaps implements IMod
{
    private pkg;

    public postDBLoad(container: DependencyContainer): void {
		const logger = container.resolve<ILogger>("WinstonLogger");
		const db = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        this.pkg = require("../package.json");

        // Customs Plan (Map).......tpl = 5798a2832459774b53341029
        // Factory Plan (Map).......tpl = 574eb85c245977648157eec3
        // Interchange Plan (Map)...tpl = 5be4038986f774527d3fae60
        // Sanitorium Plan (Map)....tpl = 5a80a29286f7742b25692012
        // Shoreline Plan (Map).....tpl = 5a8036fb86f77407252ddc02
        // Woods Plan (Map).........tpl = 5900b89686f7744e704a8747
        // Reserve Plan (Map).......tpl = na
        // Lighthouse Plan (Map)....tpl = na
        // Streets Plan (Map).......tpl = na

        db.templates.items["627a4e6b255f7527fb05a0f6"]._props.Slots[0]._props.filters[0].Filter.push(
            "5798a2832459774b53341029",
            "574eb85c245977648157eec3",
            "5be4038986f774527d3fae60",
            "5a80a29286f7742b25692012",
            "5a8036fb86f77407252ddc02",
            "5900b89686f7744e704a8747"
        );
        db.templates.items["627a4e6b255f7527fb05a0f6"]._props.Slots[1]._props.filters[0].Filter.push(
            "5798a2832459774b53341029",
            "574eb85c245977648157eec3",
            "5be4038986f774527d3fae60",
            "5a80a29286f7742b25692012",
            "5a8036fb86f77407252ddc02",
            "5900b89686f7744e704a8747"
        );
        db.templates.items["627a4e6b255f7527fb05a0f6"]._props.Slots[2]._props.filters[0].Filter.push(
            "5798a2832459774b53341029",
            "574eb85c245977648157eec3",
            "5be4038986f774527d3fae60",
            "5a80a29286f7742b25692012",
            "5a8036fb86f77407252ddc02",
            "5900b89686f7744e704a8747"
        );

        logger.info(`${this.pkg.author}-${this.pkg.name} v${this.pkg.version}: Cached Successfully`);
    }

}

module.exports = { mod: new SpecMaps() }