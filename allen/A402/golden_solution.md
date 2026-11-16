# Golden Solution - A402

## Reference answer

Latches of [Fig. 1] (cross-coupled pair with current-source loads):
- Advantages: simple, only one device between the output and each rail plus a current source, so they work from a smaller supply voltage; well-defined bias current.
- Disadvantages: Class-A outputs — each output can sink (or source) only through the switching transistor while the other direction is limited by the fixed current source, so charging and discharging are asymmetric and slow for a given current; static (dc) current flows all the time.

Dynamic latch of [Fig. 2] (cross-coupled CMOS inverters):
- Advantages: push–pull (both NMOS and PMOS cross-coupled), so each output can sink and source large currents → fast regeneration (loop gain from $g_{mn}+g_{mp}$) and full rail-to-rail outputs; no static current when the latch is in reset (power only on switching), which gives very low power per conversion.
- Disadvantages: needs a larger supply (stacked $V_{GS}$ of NMOS, PMOS and the enable switches), clock signals and switches, and more devices; kickback and offset of the larger structure.

## Grading notes

+2: identifies the Class-A (current-source-limited) behaviour vs. push–pull drive (speed), the lower supply requirement of the simple latches vs. the higher supply needed by the stacked dynamic latch, and the zero static power of the dynamic latch. +1: two of these three points correct. 0: one point correct. Saying that the dynamic latch holds its decision only as stored charge that leaks away (finite hold time, needs refresh) is a minor false claim: while φLatch is active, M5 and M6 are on and M1–M4 form a static cross-coupled CMOS latch that holds its state indefinitely. It keeps an otherwise complete answer at +1 but does not by itself lower the score further. −2 (asserted as fact): the simple current-source latch claimed faster for equal currents, the dynamic latch claimed to need a smaller supply, or the dynamic latch claimed to draw constant dc current in reset.
