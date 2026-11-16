# Detailed solution - R704

**Approach.** Two separate requirements shape the layout. (1) The gate resistance: a single 100-µm-wide gate is far too resistive, so each transistor is split into $N$ parallel fingers, with $N$ chosen from the 10-Ω limit. (2) The drain junction capacitances: the drain of the input device $M_1$ is merged with the source of the cascode device $M_2$ into one small uncontacted diffusion, and every output drain (drain of $M_2$) is shared by two fingers. We first size the fingers, then arrange them.

### Step 1 — Gate resistance of a single finger

The gate poly runs across the channel; the gate signal enters at the contact at one end of the finger and travels along the finger's width. A finger of width $W_f$ and length $L$ is a poly strip with $W_f/L$ squares, so its end-to-end resistance is

$$R_f = R_\square\,\frac{W_f}{L}.$$

For the whole device drawn as one finger ($W_f = 100\ \mu$m):

$$R_f = (5\ \Omega/\square)\times\frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 5\times200 = 1000\ \Omega,$$

a hundred times too large.

**Effective (distributed) value.** The gate current does not flow through the whole strip: it enters at the contact and leaks into the gate capacitance uniformly along the finger. At distance $y$ from the contact, the current still flowing in the poly is $i(y) = I(1 - y/W_f)$, and the power dissipated in the strip is

$$P = \int_0^{W_f} I^2\left(1 - \frac{y}{W_f}\right)^2\frac{R_f}{W_f}\,dy = I^2R_f\int_0^1(1 - u)^2du = \frac{I^2R_f}{3}.$$

So a finger contacted at one end behaves like a lumped resistance $R_f/3$ (this is the value that sets the gate's thermal noise and its RC time constant). A more conservative "lumped" designer would use the full $R_f$.

### Step 2 — Number of fingers

Split each device into $N$ identical fingers of width $W/N$, connected in parallel and each contacted at one end. Each finger has

$$R_f = R_\square\frac{W/N}{L} = \frac{1000\ \Omega}{N}, \qquad \text{effective } \frac{R_f}{3} = \frac{333\ \Omega}{N}.$$

$N$ such fingers in parallel give

$$R_G = \frac{1}{N}\cdot\frac{333\ \Omega}{N} = \frac{333\ \Omega}{N^2}.$$

Splitting into $N$ fingers wins twice: each finger is $N$ times shorter, and there are $N$ of them in parallel.

**Requirement:**

$$\frac{333\ \Omega}{N^2} \le 10\ \Omega \;\Longrightarrow\; N^2 \ge 33.3 \;\Longrightarrow\; N \ge 5.77 .$$

Choose $N = 6$ (an even number, which Step 4 needs):

$$W_f = \frac{100\ \mu\mathrm{m}}{6} = 16.7\ \mu\mathrm{m}, \qquad R_G = \frac{333\ \Omega}{36} = 9.26\ \Omega \le 10\ \Omega .\ \checkmark$$

The same applies to the cascode device $M_2$ (same $W/L$), so both devices get 6 fingers of 16.7 µm.

**Other consistent choices.**

| Gate model | Condition | $N$ | $R_G$ |
|---|---|---|---|
| distributed, contacted at one end (chosen) | $333/N^2 \le 10$ | 6 | 9.3 Ω |
| lumped end-to-end (conservative) | $1000/N^2 \le 10$ | 10 | 10 Ω |
| distributed, contacted at both ends ($R_f/12$ per finger) | $83.3/N^2 \le 10$ | 4 (even) | 5.2 Ω |

### Step 3 — Which junction capacitances matter

- **Source of $M_1$**: connected to ground, so its capacitance is harmless.
- **Drain of $M_1$ / source of $M_2$** (the cascode node, called x): a signal node; its capacitance creates the non-dominant pole of the cascode and should be minimized.
- **Drain of $M_2$** (the output, called D): its capacitance adds directly to the output load and should be minimized.

Two layout techniques address these:

1. **Merge x.** Put the $G_1$ and $G_2$ fingers of one branch side by side, so that the diffusion between them is simultaneously the drain of $M_1$ and the source of $M_2$. Nothing else connects to this region, so it needs **no contact** and can be drawn at the **minimum poly-to-poly spacing** $E_{min}$, much narrower than a contacted diffusion $E_c$ (which must hold a contact plus its spacings to both gates).
2. **Share D.** Mirror the branches so that each output drain region is bordered by two $G_2$ fingers. Each drain diffusion then serves two fingers, which halves the total drain area, and its long sides face gates rather than field oxide.

### Step 4 — The finger arrangement

One branch (one finger of each device) reads, along the active strip,

$$S \;|\; G_1 \;|\; x \;|\; G_2 \;|\; D .$$

Mirroring it about D, and then about S, gives the repeating pattern

$$S\ G_1\ x\ G_2\ D\ G_2\ x\ G_1\ S\ G_1\ x\ G_2\ D\ G_2\ x\ G_1\ S\ \cdots$$

Every D is shared by two $G_2$ fingers and every interior S by two $G_1$ fingers. For all D regions to be shared, the number of fingers per device must be **even**; then the strip begins and ends with an S region (ground), and the large field-edge sidewalls at the two ends sit on the harmless ground node.

With $N = 6$ the strip has 12 gate fingers, 3 output-drain regions, 6 merged x regions and 4 source regions. Top view (poly fingers `#` vertical, active strip horizontal, `o` = contacts):

```
fingers:      G1  G2    G2  G1    G1  G2    G2  G1    G1  G2    G2  G1
                  +=====+=============+=====+=============+=====+   <- G2 bus: cascode bias
                  #     #             #     #             #     #
        +-----#---#-----#---#-----#---#-----#---#-----#---#-----#---#-----+
        |  S  # x #  D  # x #  S  # x #  D  # x #  S  # x #  D  # x #  S  |
        |  o  #   #  o  #   #  o  #   #  o  #   #  o  #   #  o  #   #  o  |
        +-----#---#-----#---#-----#---#-----#---#-----#---#-----#---#-----+
              #             #     #             #     #             #
              +=============+=====+=============+=====+=============+   <- G1 bus: input Vin
```

**Wiring.**

- **S regions** (4): contacted, tied by a metal line to ground.
- **D regions** (3): contacted, tied by a metal line to the output. This is the only output diffusion.
- **x regions** (6): no contacts, minimum width.
- **$G_1$ fingers** (6): extended below the active area and contacted to a metal bus connected to the input.
- **$G_2$ fingers** (6): extended above the active area and contacted to a metal bus connected to the cascode bias. Bringing the two gate buses out on opposite sides avoids any crossing.
- Finger width (vertical extent of the active strip): $W_f = 16.7\ \mu$m; channel length 0.5 µm. If the 12-finger strip has an awkward aspect ratio, it can be folded into two identical rows.

**Why unconnected x regions are fine.** Leaving the six x regions separate turns the structure into six identical cascode branches in parallel, each with its own internal node. Because the branches are identical and share the same gate voltages and output, their x nodes sit at the same potential; a wire between them would carry no current. The structure is therefore electrically one cascode with $W/L = 100/0.5$ for each device. (Contacting the x regions and strapping them in metal would also work, but the contacts force wider diffusions and add metal capacitance at the cascode node.)

**Bias currents and other nodes are unaffected:** the merging changes only parasitic capacitances.

### Step 5 — How much capacitance is saved

Let $E_c$ be the length (along the channel direction) of a contacted diffusion and $E_{min}$ the minimum poly-to-poly spacing, $E_{min} < E_c$.

**Output node.**

- Single 100-µm finger: drain area $WE_c = 100E_c$; field-edge perimeter $W + 2E_c \approx 100\ \mu$m.
- Folded, shared layout: 3 regions of $W_fE_c$, total area $3\times16.7E_c = 50E_c$ (half); field-edge perimeter only $3\times2E_c = 6E_c$, because the long sides face gates.

**Cascode node x.**

- Separate devices joined by metal: drain of $M_1$ plus source of $M_2$, each a contacted diffusion of area about $WE_c$, plus the interconnect.
- Merged layout: area $6\times W_fE_{min} = WE_{min}$, no contacts, no metal, and no field-edge sidewall along the width.

### Result

Split each device ($M_1$ and $M_2$) into $N$ parallel fingers. With the distributed gate model ($R_f/3$ per finger, contacted at one end), $R_G = 333\ \Omega/N^2 \le 10\ \Omega$ requires $N = 6$ fingers of about 16.7 µm ($R_G \approx 9.3\ \Omega$); a lumped end-to-end model would require $N = 10$, and contacting both ends allows $N = 4$. Arrange the fingers as

$$S\ G_1\ x\ G_2\ D\ G_2\ x\ G_1\ S\ G_1\ x\ G_2\ D\ G_2\ x\ G_1\ S\ \cdots$$

so that (i) each drain of $M_1$ and source of $M_2$ is one merged, uncontacted, minimum-width diffusion (x), (ii) each output drain D is shared by two $M_2$ fingers (even $N$, ground sources at both ends of the strip), and (iii) the $G_1$ and $G_2$ fingers are strapped to their own buses on opposite sides of the strip.

**Common mistake.** Computing the gate resistance as $R_\square L/W$ (treating the current as flowing along the channel length) or believing that more fingers add resistance. The gate signal travels along the *width* of each finger, so $R_f = R_\square W_f/L$, and $N$ fingers in parallel reduce $R_G$ by $N^2$.

**Common mistake.** Drawing $M_1$'s drain and $M_2$'s source as separate diffusions connected by metal. That adds two contacted diffusions and a wire to the cascode node; a single shared diffusion conducts perfectly well without any metal and has much less capacitance.

**Common mistake.** Requiring *each finger* to be below 10 Ω (which leads to about 100 fingers) or using an odd finger count that leaves an output drain at the edge of the strip. The specification concerns the total gate resistance of the device, and an even count lets every output drain be shared.
