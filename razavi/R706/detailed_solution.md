# Detailed solution - R706

**Approach.** Find a lower bound on the number of conducting layers (polysilicon and metals) from what each layer must do, then show by an explicit routing that it is achievable. The nets that seem to require crossings are the diagonal connections of the common-centroid arrangement; the key observations are that poly can pass *under* metal 1 without connecting to it, and that each half device's source and drain combs can be oriented so that the metal-1 nets never cross.

### Step 1 — What must be connected

Label the quadrants top-left (TL) $=\tfrac12M_1$, top-right (TR) $=\tfrac12M_2$, bottom-left (BL) $=\tfrac12M_2$, bottom-right (BR) $=\tfrac12M_1$:

| Net | Connects | Leaves the structure to |
|---|---|---|
| $G_1$ (gate of $M_1$) | TL, BR | input $V_{in1}$ |
| $G_2$ (gate of $M_2$) | TR, BL | input $V_{in2}$ |
| $D_1$ (drain of $M_1$) | TL, BR | output 1 / load |
| $D_2$ (drain of $M_2$) | TR, BL | output 2 / load |
| $S$ (common source) | TL, TR, BL, BR | tail current source |

**Wiring rules.** Poly may cross metal (it lies underneath, separated by dielectric) but not another poly line or an active area (that would form an unwanted transistor). Metal 1 may cross poly and active freely, but not another metal-1 line. A diffusion connects to other nodes only through a contact to metal (no poly-to-diffusion contacts).

### Step 2 — Lower bound: one layer is not enough

The gate fingers are polysilicon, so poly is necessarily present. With four gate fingers, each half device has diffusions $S\,D\,S\,D\,S$: three source strips and two drain strips separated by gates, which can be joined only through **metal**. Hence at least **two** interconnect layers (poly + metal 1) are needed; the question is whether two also *suffice*.

### Step 3 — Inside one half device: poly + metal 1 suffice

The four vertical gate fingers are joined by a poly bar outside the active area on one side (here the bottom), which then leaves the device sideways. The three source strips are joined by a metal-1 comb with its spine along the top; the two drain strips by a metal-1 comb with its spine along the bottom, beyond the poly bar, which the drain stripes cross without contact.

```
S spine (metal 1)      sssssssssssssssssssssssss
                       s  #     #  s  #     #  s
active area         +--s--#-----#--s--#-----#--s--+
                    |  S  #  D  #  S  #  D  #  S  |
                    +-----#--d--#-----#--d--#-----+
gate bar (poly)           ###x###########x###################
                             d           d
D spine (metal 1)            dddddddddddddddddddddddddddddddd
```

(`#` poly, `s`/`d` metal 1, `x` metal crossing over poly.) The two combs interdigitate without touching. Because the number of fingers is even, both outer diffusions are sources and the drain comb is reached from one side only. By mirroring, **the source comb, drain comb and gate bar can be put on whichever sides we choose**, and that freedom makes the global routing possible.

### Step 4 — A planar routing with poly + metal 1

Drawn naively through the centre (as in the figure), $G_1$ crosses $G_2$ and $D_1$ crosses $D_2$. The routes must instead keep $G_1$ and $G_2$ (poly) apart and off active areas, keep $D_1$, $D_2$ and $S$ (metal 1) from crossing each other, and leave only poly-under-metal crossings.

**Orientation of each half device:**

| Quadrant | Drain comb (with gate bar next to it) | Source comb |
|---|---|---|
| TL ($\tfrac12M_1$) | bottom, facing the horizontal channel | top |
| BR ($\tfrac12M_1$) | top, facing the horizontal channel | bottom |
| TR ($\tfrac12M_2$) | top, facing outward | bottom |
| BL ($\tfrac12M_2$) | bottom, facing outward | top |

**Routes:**

- **$D_1$ (metal 1):** from TL's drain comb straight along the horizontal channel between the rows to BR's drain comb, and out at the right end of the channel.
- **$D_2$ (metal 1):** from TR's drain comb along the top edge, down the outside of the left column, and along the bottom edge to BL's drain comb; on the periphery, it can leave anywhere on the left.
- **$S$ (metal 1):** TL–TR through the upper half of the vertical channel (TL's top comb to TR's bottom comb, above $D_1$); BL–BR through the lower half (BL's top comb to BR's bottom comb, below $D_1$); TL–BL along the left edge, *inside* the $D_2$ loop. It leaves at the bottom, from BR's source comb, toward the tail.
- **$G_1$ (poly):** from TL's gate bar into the vertical channel, straight down (under $S$ and $D_1$) to BR's gate bar, and out at the bottom of the vertical channel to the input.
- **$G_2$ (poly):** from TR's gate bar along the top edge and down the left edge (alongside $D_2$) to BL's gate bar; its input contact is on the left edge.

Map of the routing (`1` = $D_1$, `2` = $D_2$, `s` = $S$, all metal 1; `*` = $G_1$, `:` = $G_2$, both poly; `x` = poly passing under metal 1):

```
  222222222222222222222222222222222222222222222
  2                                           2
  2 ::::::::::::::::::::::::::::::::          2
  2 : ssssssssssssssssssssssss     :          2
  2 : s   +---------------+  s     :  +---------------+
  2 : s   | S comb        |  s     :::| D, gate bar   |
  2 : s   | 1/2 M1  (TL)  |  s        | 1/2 M2  (TR)  |
  2 : s   |               |  s        |               |
  2 : s   | gate bar, D   |**x****    | S comb        |
  2 : s   +---------------+  s   *    +---------------+
  2 : s           1          ssssxsssssssssssss
  2 : s           1              *
  2 : s           111111111111111x1111111111111111111111111111111
  2 : s                          *            1
  2 : ssssssssssssssssssssssssss *            1
  2 :     +---------------+    s *    +---------------+
  2 :     | S comb        |    s *****| D, gate bar   |
  2 :     | 1/2 M2  (BL)  |    s *    | 1/2 M1  (BR)  |
  2 :     |               |    s *    |               |
  2 ::::::| gate bar, D   |    s *    | S comb        |
  2       +---------------+    s *    +---------------+
  2               2            ssxsssssssssssss
  22222222222222222              *            s
                                 *            s
                                 *            s
```

### Step 5 — Checking every crossing

- **Metal 1 vs. metal 1.** $D_1$ occupies only the horizontal channel and exits to the right; the upper $S$ link stays above it and the lower one below it; the left-edge $S$ link runs inside $D_2$ without touching it; $D_2$ never enters the channels or the right side. **No metal-1 crossings.**
- **Poly vs. poly.** $G_1$ stays in the vertical channel below TL's gate-bar level and exits at the bottom; $G_2$ crosses the top of the vertical channel above that level and then stays on the left periphery, entering BL from the left. **No poly crossings.**
- **Poly vs. active.** Both gate nets run only in channels and around the edge, entering each half device at its gate bar outside the active area. **No parasitic transistors.**
- **Poly vs. metal 1.** These are the only crossings (marked `x`, plus the drain stripes over each gate bar), and they are allowed.

So **two interconnect layers, polysilicon and metal 1, are sufficient**, and by Step 2 they are also necessary.

### Step 6 — The price of the minimum, and the practical choice

The two-layer solution sacrifices the symmetry that motivates a common-centroid layout: $D_1$ is short (through the middle) while $D_2$ is long (around the outside), so the outputs see different wiring capacitance and resistance, and $G_2$ is a long, resistive poly line (noise, delay), unlike $G_1$. A practical layout therefore adds **metal 2** for the crossings, so that $D_1$ and $D_2$ (and $G_1$, $G_2$ in metal) run symmetrically through the centre: poly + metal 1 + metal 2, three layers. More than three is never necessary.

### Result

The minimum is **two interconnect layers: polysilicon plus one metal (metal 1)**. Inside each half device, the four poly fingers are joined by a poly bar and the $S\,D\,S\,D\,S$ diffusions by two interdigitated metal-1 combs. Between the quadrants, the gates are routed in poly (one through the centre, one around the outside), which may pass freely under metal 1, and the drain and source nets can be made planar in metal 1 by orienting the drain combs of $\tfrac12M_1$ toward the central channel and those of $\tfrac12M_2$ outward. A symmetric, practical layout normally uses a second metal (three layers in all).

**Common mistake.** Claiming a single layer suffices. The gate fingers must be polysilicon, and the separate source and drain strips can be joined only through contacts to metal.

**Common mistake.** Assuming the interdigitated sources and drains of one half device cannot be wired in one metal layer. Two interleaved combs, entered from opposite sides, connect them without crossing.

**Common mistake.** Answering three or four layers because the diagonal connections "must cross". Poly-under-metal crossings are free, and the metal nets can be untangled by orienting each half device; extra metals improve symmetry but are not required.
