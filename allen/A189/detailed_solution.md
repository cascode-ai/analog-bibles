# Detailed solution - A189

The circuit's dc currents are set by three independent sources: M7 and M8 push $I_7$ and $I_8$ down, M9 pulls $I_9$. KCL at the drain nodes can then be satisfied with every device saturated only if the currents agree exactly. Examine what happens when they do not, then add a loop that forces them to agree, common-mode feedback (CMFB), without touching the differential signal path.

### Step 1 — Effect of $I_7+I_8\ne I_9$

The two drain nodes, X (drains of M3 and M5) and the output (drains of M4 and M6), are high-resistance nodes: each looks into an n-channel and a p-channel cascode, so their common-mode resistance is of order $g_mr_{ds}^2$. A current mismatch $\Delta I=I_7+I_8-I_9$ therefore moves their common-mode voltage by $\Delta I$ times that resistance, which for any practical mismatch exceeds the available headroom. The nodes drift until some transistors leave saturation and their currents adjust:

- **$I_7+I_8>I_9$:** both drain nodes rise toward $V_{DD}$ until M5–M6 and then M7–M8 enter the nonsaturation region and the p-channel currents fall to $I_9$.
- **$I_7+I_8<I_9$:** both drain nodes, and with them the common source node of M1–M2, fall until M9 leaves saturation, the only way its current can drop to $I_7+I_8$; M3–M4 and M1–M2 are driven into the nonsaturation region on the way.

Either way the output dc level is undefined and the amplifier loses its high output resistance and gain. Only a mismatch smaller than (headroom)/(common-mode resistance) is absorbed with all devices saturated, a tiny fraction of the bias current. Ratioing the mirrors more carefully does not help: the currents already come from one reference, and the inequality arises from mismatch, channel-length modulation and process, voltage and temperature changes, which a fixed ratio cannot track.

### Step 2 — Solution: common-mode feedback

<!-- diagram: diagram-01.cir -->

Replace the fixed gate bias of M7–M8 by a feedback loop that measures the common-mode level of the two drain nodes and adjusts the p-channel current until $I_7+I_8=I_9$:

- **Sensing.** Source followers MS1 and MS2 (with current sinks IS1, IS2) buffer node X and $v_{out}$; two equal resistors $R_{CM}$ from the follower outputs to node CM form their average. The followers keep the resistors from loading the high-resistance outputs; unbuffered resistors would have to be much larger than the cascode output resistance.
- **Error amplifier.** The pair MC1–MC2 (tail MC5) compares CM with a reference $V_{REF}$ (MC1 gate at $V_{REF}$, MC2 gate at CM). MC1 drains into the diode-connected p-channel MC3, MC2 into the diode-connected MC4.
- **Control.** The gate of MC3 (node VBP) drives the gates of M7 and M8 instead of the fixed M12 line, so M7–M8 mirror MC3's current.

Loop polarity: if the drain nodes rise (too much p-channel current), CM rises, MC2 takes more of the tail current and MC1 less, so MC3's current and $V_{SG3}$ fall, VBP rises, and M7–M8 conduct less, pulling the nodes back down. The loop thus holds the common-mode level of X and $v_{out}$ near $V_{REF}$ (offset by the follower $V_{GS}$) with all devices saturated. Driving the gate of M9 instead of M7–M8 works equally well with the polarity reversed.

### Step 3 — Gain and output resistance

For a differential input, X and $v_{out}$ move in opposite directions, so their average CM does not change and the CMFB loop does not respond. The differential path is untouched, and the gain remains

$$
\frac{v_{out}}{v_{in}}=\frac12g_{m1}\,(R_n\parallel R_p),\qquad R_n\approx g_{m4}r_{ds4}r_{ds2},\quad R_p\approx g_{m6}r_{ds6}r_{ds8} .
$$

The differential (half-circuit) output resistance $R_n\parallel R_p$ that sets this gain is likewise unchanged. The single-ended driving-point resistance at $v_{out}$ also contains a common-mode part: with an ideal tail it is $R_p\parallel(2R_n+R_p)$ ($\frac34R$ for $R_n=R_p=R$) without CMFB, and it falls toward $\frac12(R_n\parallel R_p)$ ($\frac14R$) within the CMFB loop bandwidth, still of cascode order; with a slow (dc-only) loop it is unchanged at signal frequencies.

### Step 4 — Alternative

A self-biased cascode current-mirror load (gates of M7–M8 tied to M7's drain, gates of M5–M6 to node X, or the high-swing variant) also removes the over-determination, since the mirror takes its current from whatever M1 carries. It keeps $R_{out}\approx R_n\parallel R_p$ but doubles the single-ended gain to $g_{m1}(R_n\parallel R_p)$; to keep roughly the same gain, $g_{m1}$ would have to be halved. CMFB is therefore the solution that leaves both gain and output resistance as they were.
