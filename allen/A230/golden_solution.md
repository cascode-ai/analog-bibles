# Golden Solution - A230

## Reference answer

Principle: sense the current in each output transistor and, when it exceeds the limit, reduce that transistor's gate drive with a clamp transistor (local negative feedback active only under overload).

One implementation (resistor sensing):
- Sourcing: insert a small sense resistor $R_{S3}$ between $V_{DD}$ and the source of M3, and add a p-channel clamp M5 with source at $V_{DD}$, gate at the source of M3 and drain at the gate of M3 (top of $V_{BIAS}$). When $I_{M3}R_{S3}$ approaches $|V_{TP}|$, M5 turns on and pulls M3's gate toward its source, so $I_{M3}$ is limited to ≈ $|V_{TP}|/R_{S3}$ (plus a little overdrive); $R_1$ (or the active load) provides the resistance M5 works against.
- Sinking: insert $R_{S2}$ between the source of M2 and ground and an n-channel clamp M4 with source at ground, gate at the source of M2 and drain at the gate of M2 (drain of M1). When $I_{M2}R_{S2} \approx V_{TN}$, M4 pulls M2's gate down (in parallel with M1), limiting $I_{M2}$ to ≈ $V_{TN}/R_{S2}$.

Alternative without series resistors (no loss of swing): small replica transistors sharing gate and source with M3 (and M2), scaled 1:N, carry $I_{OUT}/N$; each replica current is compared with a reference current $I_{lim}/N$ from an opposite-type current source at a common drain node, and the voltage of that node drives a clamp that pulls the corresponding output gate back when the limit is exceeded.

Trade-offs: series sensing costs output swing and adds output resistance; replica sensing depends on matching. The clamps must be fast enough and the limit chosen below the devices' safe current.

## Grading notes

Open design question: accept any scheme that (1) senses the sourcing and the sinking output currents (series resistor, replica/mirror, or equivalent) and (2) uses that signal to reduce the gate drive of M3 and of M2 with the correct polarity, and that explains how the limit current is set. +2: both directions protected with correct polarity and a stated limit mechanism. +1: only one direction protected, or both described qualitatively without the connections. 0: only a generic statement (e.g. "add current limiting"). −2 (asserted as fact): a scheme whose clamp increases the gate drive under overload (positive feedback), or simply a large series output resistor presented as protection with no drawback discussed.
