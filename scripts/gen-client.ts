import {createFromRoot} from 'codama';
import {rootNodeFromAnchor} from '@codama/nodes-from-anchor';
import {renderRustVisitor} from '@codama/renderers';
import lightHouseIdl from "../idl/idl.json";

function createClient(json: any, name: string) {
    // @ts-ignore
    const codama = createFromRoot(rootNodeFromAnchor(json));
    codama.accept(renderRustVisitor(`src/`));
}

createClient(lightHouseIdl, "lighthouse");
