# Golden Solution - A328

## Reference answer

Good: [Fig. 1] and [Fig. 2]. Poor: [Fig. 3], [Fig. 4] and [Fig. 5]. (Qualitative low/mid-frequency input-referred noise, assuming comparable input-pair $g_m$ and comparable sizing of the other devices; equal currents alone do not fix every $g_m$ or 1/f coefficient, so these are the typical ratings, not parameter-free ones.)

- [Fig. 1], [Fig. 2] (two-stage): the input-referred noise is set by the input pair and its two loads (M3, M4, weighted by $(g_{m3}/g_{m1})^2$); the high gain of the first stage makes the second-stage (and push–pull driver) noise negligible. Few devices contribute.
- [Fig. 3] (folded cascode): the folding current sources (M4, M5) and the cascode current sinks (M10, M11) inject their noise currents directly into the signal path with the same weight as the input-pair signal current; referred to the input they add terms ∝ $(g_{m4}/g_{m1})^2$ and $(g_{m10}/g_{m1})^2$, and M4/M5 carry more current than the input devices, so these contributions are large.
- [Fig. 4]: the same folded structure plus the extra current sources and mirrors (M14–M21) in the signal path: even more noise contributors.
- [Fig. 5]: each signal path contains two input devices in series (n- and p-channel, M1/M4 and M2/M3), the level-shifting followers and diodes (M17–M22) and the current mirrors M5–M12; many devices contribute and the p-channel devices add 1/f noise.

## Grading notes

+2: [Fig. 1] and [Fig. 2] rated good (low) and [Fig. 3], [Fig. 4], [Fig. 5] poor (high), with the reason that in the two-stage amplifiers only the input stage matters while in the folded and cross-coupled designs additional current sources/mirrors/devices feed noise directly into the signal path. Naming p-channel 1/f noise in [Fig. 5] specifically is not required; a sound device-contribution argument suffices, and extra correct detail (e.g., the series n/p input devices of [Fig. 5] halving the branch $g_m$, cascodes contributing little because of source degeneration) is not docked. +1: ratings right with thin reasons, or one rating debatable but well argued (e.g., [Fig. 5] judged comparable or good with an explicit, conditional argument). 0: two or more ratings wrong without convincing argument; or one rating wrong through a misread topology (e.g., the source followers M21/M22 of [Fig. 5] taken as a second input pair in parallel). −2 (asserted as fact): folded-cascode amplifiers claimed to be the lowest-noise of the set because of cascoding, or the low-frequency noise of the two-stage designs claimed to be set by the output stage.
