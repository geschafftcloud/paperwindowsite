// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: a86HqUu8sDz65Ze2P1UsEf
// Component: s2c6AiaiA1ah7g
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_paperwindow.module.css"; // plasmic-import: a86HqUu8sDz65Ze2P1UsEf/projectcss
import * as sty from "./PlasmicAvatar.module.css"; // plasmic-import: s2c6AiaiA1ah7g/css

export type PlasmicAvatar__VariantMembers = {};

export type PlasmicAvatar__VariantsArgs = {};
type VariantPropType = keyof PlasmicAvatar__VariantsArgs;
export const PlasmicAvatar__VariantProps = new Array<VariantPropType>();

export type PlasmicAvatar__ArgsType = {
  pic?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAvatar__ArgsType;
export const PlasmicAvatar__ArgProps = new Array<ArgPropType>("pic");

export type PlasmicAvatar__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultAvatarProps {
  pic?: React.ReactNode;
  className?: string;
}

function PlasmicAvatar__RenderFunc(props: {
  variants: PlasmicAvatar__VariantsArgs;
  args: PlasmicAvatar__ArgsType;
  overrides: PlasmicAvatar__OverridesType;
  dataFetches?: PlasmicAvatar__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__mOgwR)}
            role={"img"}
            src={"/plasmic/paperwindow/images/profilepic.png"}
          />
        ),

        value: args.pic
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAvatar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicAvatar__VariantsArgs;
  args?: PlasmicAvatar__ArgsType;
  overrides?: NodeOverridesType<T>;
  dataFetches?: PlasmicAvatar__Fetches;
} & Omit<PlasmicAvatar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicAvatar__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAvatar__ArgProps,
      internalVariantPropNames: PlasmicAvatar__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicAvatar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAvatar";
  } else {
    func.displayName = `PlasmicAvatar.${nodeName}`;
  }
  return func;
}

export const PlasmicAvatar = Object.assign(
  // Top-level PlasmicAvatar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicAvatar
    internalVariantProps: PlasmicAvatar__VariantProps,
    internalArgProps: PlasmicAvatar__ArgProps
  }
);

export default PlasmicAvatar;
/* prettier-ignore-end */
