// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: a86HqUu8sDz65Ze2P1UsEf
// Component: M_qanWxDM2cNF
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
import LinkButton from "../../LinkButton"; // plasmic-import: VusKHxOGdV-il/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: HfksE-Q9JKgIPr/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_paperwindow.module.css"; // plasmic-import: a86HqUu8sDz65Ze2P1UsEf/projectcss
import * as sty from "./PlasmicHomeCta.module.css"; // plasmic-import: M_qanWxDM2cNF/css

import SphereIcon from "./icons/PlasmicIcon__Sphere"; // plasmic-import: JmuW1q8xhIqLf_/icon

export type PlasmicHomeCta__VariantMembers = {};

export type PlasmicHomeCta__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomeCta__VariantsArgs;
export const PlasmicHomeCta__VariantProps = new Array<VariantPropType>();

export type PlasmicHomeCta__ArgsType = {};
type ArgPropType = keyof PlasmicHomeCta__ArgsType;
export const PlasmicHomeCta__ArgProps = new Array<ArgPropType>();

export type PlasmicHomeCta__OverridesType = {
  root?: p.Flex<"div">;
  linkButton?: p.Flex<typeof LinkButton>;
  svg?: p.Flex<"svg">;
};

export interface DefaultHomeCtaProps {
  className?: string;
}

function PlasmicHomeCta__RenderFunc(props: {
  variants: PlasmicHomeCta__VariantsArgs;
  args: PlasmicHomeCta__ArgsType;
  overrides: PlasmicHomeCta__OverridesType;
  dataFetches?: PlasmicHomeCta__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__xoZKl)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___5K1WO
          )}
        >
          {"Contribute and learn on GitHub"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__e33BN
          )}
        >
          {
            "Paperwindow is an open source project on GitHub, so anyone can contribute to or make their own version of Paperwindow."
          }
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__nZodX)}
        >
          <LinkButton
            data-plasmic-name={"linkButton"}
            data-plasmic-override={overrides.linkButton}
            className={classNames("__wab_instance", sty.linkButton)}
            href={"https://github.com/geschafftcloud/paperwindow" as const}
            text={
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__qYrAm
                )}
              >
                {"Visit Paperwindow on GitHub"}
              </div>
            }
            type={"solidBlue" as const}
          />
        </p.Stack>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___038M
          )}
        >
          {
            "By continuing to GitHub, you agree to their terms of service and privacy policy. GitHub is not directly affiliated with Paperwindow or Geschafft Cloud."
          }
        </div>
      </p.Stack>

      {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
        <div className={classNames(defaultcss.all, sty.box__gTjDc)}>
          <SphereIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "linkButton", "svg"],
  linkButton: ["linkButton"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  linkButton: typeof LinkButton;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomeCta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHomeCta__VariantsArgs;
  args?: PlasmicHomeCta__ArgsType;
  overrides?: NodeOverridesType<T>;
  dataFetches?: PlasmicHomeCta__Fetches;
} & Omit<PlasmicHomeCta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHomeCta__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomeCta__ArgProps,
      internalVariantPropNames: PlasmicHomeCta__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHomeCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeCta";
  } else {
    func.displayName = `PlasmicHomeCta.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeCta = Object.assign(
  // Top-level PlasmicHomeCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    linkButton: makeNodeComponent("linkButton"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicHomeCta
    internalVariantProps: PlasmicHomeCta__VariantProps,
    internalArgProps: PlasmicHomeCta__ArgProps
  }
);

export default PlasmicHomeCta;
/* prettier-ignore-end */
