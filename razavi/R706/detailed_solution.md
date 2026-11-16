# Detailed solution - R706

**Approach.** Count the conducting layers available for wiring (polysilicon and the metals), find a lower bound from what each layer can and cannot do, and then show by an explicit routing that this lower bound is achievable. The nets that seem to require crossings are the diagonal connections of the common-centroid arrangement; the key observations are that poly can pass *under* metal 1 without connecting to it, and that the orientation of each half device's source and drain combs can be chosen so that the metal-1 nets never cross each other.

### Step 1 — What must be connected

Label the four quadrants: top-left (TL) $=\tfrac12M_1$, top-right (TR) $=\tfrac12M_2$, bottom-left (BL) $=\tfrac12M_2$, bottom-right (BR) $=\tfrac12M_1$. The nets are:

| Net | Connects | Leaves the structure to |
|---|---|---|
| $G_1$ (gate of $M_1$) | TL, BR | input $V_{in1}$ |
| $G_2$ (gate of $M_2$) | TR, BL | input $V_{in2}$ |
| $D_1$ (drain of $M_1$) | TL, BR | output 1 / load |
| $D_2$ (drain of $M_2$) | TR, BL | output 2 / load |
| $S$ (common source) | TL, TR, BL, BR | tail current source |

**Wiring rules.**

- **Polysilicon** can cross metal (it lies underneath, separated by dielectric) but it cannot cross another poly line, and it must not cross an active area (it would form an unwanted transistor there).
- **Metal 1** can cross poly and active areas freely, but cannot cross another metal-1 line.
- A diffusion can only be connected to other nodes through a contact to metal (a standard process has no poly-to-diffusion contacts).

### Step 2 — Lower bound: one layer is not enough

- The gate fingers themselves are polysilicon, so poly is necessarily present.
- Each half device has four gate fingers, so its diffusions alternate $S\,D\,S\,D\,S$: three separate source strips and two separate drain strips, separated by gates. They cannot be joined through diffusion or through poly, so a **metal** layer is required to connect them.

Hence at least **two** interconnect layers (poly + metal 1) are needed. The question is whether two are also *sufficient*.

### Step 3 — Inside one half device: poly + metal 1 suffice

With four vertical gate fingers:

- the **gate fingers** are joined by a poly bar running outside the active area on one side (here the bottom), which then leaves the device sideways;
- the three **source strips** are joined by a metal-1 comb whose spine runs along the opposite side (top);
- the two **drain strips** are joined by a metal-1 comb whose spine runs along the bottom, beyond the poly bar. The drain stripes cross over the poly bar: metal over poly, no contact, no problem.

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

(`#` poly, `s`/`d` metal 1, `x` metal crossing over poly.) The two combs interdigitate without touching. Because the number of fingers is even, both outer diffusions are sources, and the drain comb is reached from one side only. So each half device needs only poly and metal 1, and **its source comb, drain comb and gate bar can be put on whichever sides we choose** (by mirroring the device). That freedom is what makes the global routing possible.

### Step 4 — The apparent problem: diagonal nets

Each of the four nets $G_1$, $G_2$, $D_1$, $D_2$ joins diagonally opposite quadrants, and $S$ joins all four. Drawn naively through the centre (as in the figure), $G_1$ crosses $G_2$ and $D_1$ crosses $D_2$. Since a crossing between two nets in the *same* layer is forbidden, we must arrange the routes so that:

1. $G_1$ and $G_2$ (both poly) never cross each other or an active area;
2. $D_1$, $D_2$ and $S$ (all metal 1) never cross each other;
3. every remaining crossing is poly under metal 1, which is allowed.

### Step 5 — A planar routing with poly + metal 1

**Orientation of each half device** (which side faces which channel):

| Quadrant | Drain comb (with gate bar next to it) | Source comb |
|---|---|---|
| TL ($\tfrac12M_1$) | bottom, facing the horizontal channel | top |
| BR ($\tfrac12M_1$) | top, facing the horizontal channel | bottom |
| TR ($\tfrac12M_2$) | top, facing outward | bottom |
| BL ($\tfrac12M_2$) | bottom, facing outward | top |

**Routes:**

- **$D_1$ (metal 1):** from TL's drain comb straight along the horizontal channel between the rows to BR's drain comb, and out at the right end of the channel.
- **$D_2$ (metal 1):** from TR's drain comb along the top edge, down the outside of the left column, and along the bottom edge to BL's drain comb. It lies on the periphery, so it can leave the structure anywhere on the left.
- **$S$ (metal 1):** TL–TR through the upper half of the vertical channel (from TL's top comb down to TR's bottom comb, staying above $D_1$); BL–BR through the lower half of the vertical channel (from BL's top comb down to BR's bottom comb, staying below $D_1$); TL–BL along the left edge, *inside* the $D_2$ loop. It leaves at the bottom, from BR's source comb, toward the tail.
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

### Step 6 — Checking every crossing

- **Metal 1 vs. metal 1.** $D_1$ occupies only the horizontal channel and exits to the right; the upper $S$ link stays above it and the lower $S$ link below it; the left-edge $S$ link and $D_2$ run side by side without touching, with $D_2$ outside; $D_2$ never enters the channels or the right side. **No metal-1 crossings.**
- **Poly vs. poly.** $G_1$ lives in the vertical channel below TL's gate-bar level and exits at the bottom; $G_2$ crosses the top of the vertical channel above that level and then stays on the left periphery, entering BL from the left. **No poly crossings.**
- **Poly vs. active.** Both gate nets run only in channels and around the edge, entering each half device at its gate bar outside the active area. **No parasitic transistors.**
- **Poly vs. metal 1.** These are the only crossings (marked `x`, plus the drain stripes crossing each gate bar inside the devices). They are allowed: the layers are separated by dielectric and connect only where a contact is drawn.

So **two interconnect layers, polysilicon and metal 1, are sufficient**, and by Step 2 they are also necessary.

### Step 7 — The price of the minimum, and the practical choice

The two-layer solution sacrifices symmetry, which is the very reason for using a common-centroid layout:

- $D_1$ is short (through the middle) while $D_2$ is long (around the outside), so the two output nodes see different wiring capacitance and resistance;
- $G_2$ is a long poly line with significant resistance (noise, delay), unlike $G_1$.

A practical layout therefore adds **metal 2** for the crossings, so that $D_1$ and $D_2$ (and $G_1$, $G_2$ in metal) can be routed symmetrically through the centre: poly + metal 1 + metal 2, i.e. three layers. More than three is never necessary.

### Result

The minimum is **two interconnect layers: polysilicon plus one metal (metal 1)**. Inside each half device, the four poly fingers are joined by a poly bar and the $S\,D\,S\,D\,S$ diffusions by two interdigitated metal-1 combs. Between the quadrants, the gates are routed in poly (one through the centre, one around the outside), which may pass freely under metal 1, and the drain and source nets can be made planar in metal 1 by orienting the drain combs of $\tfrac12M_1$ toward the central channel and those of $\tfrac12M_2$ outward. A symmetric, practical layout normally uses a second metal (three layers in all).

**Common mistake.** Claiming a single layer suffices. The gate fingers must be polysilicon, and the separate source and drain strips can only be joined through contacts to metal; one layer can do neither job alone.

**Common mistake.** Assuming that the interdigitated sources and drains of one half device cannot be wired in a single metal layer. Two interleaved combs, entered from opposite sides, connect them without any crossing.

**Common mistake.** Answering three or four layers on the grounds that the diagonal connections "must cross". Crossings between a poly net and a metal net are free, and the metal nets can be untangled by choosing which side of each half device faces which channel; extra metal layers improve symmetry but are not required.
