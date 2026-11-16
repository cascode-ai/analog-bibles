$A_v \approx +g_{m1}\left(R_D\,\big\|\,R_{cas}\right)$，其中 $R_{cas} = r_{O5} + [1 + (g_{m5} + g_{mb5})r_{O5}](r_{O1}\|r_{O3})$；精确地，$A_v = \dfrac{g_{m1}(r_{O1}\|r_{O3})[1 + (g_{m5} + g_{mb5})r_{O5}]\,R_D}{R_D + R_{cas}}$。该级是同相的。（近似式利用了 $(g_{m5}+g_{mb5})(r_{O1}\|r_{O3}) \gg 1$；它把增益高估了 $R_{cas}/(R_{cas} - r_{O5})$ 倍，通常只有百分之几。）
- PMOS 输入对管；$M_1$ 的漏极与 $M_3$ 及共源共栅（cascode）管 $M_6$ 的源极相连（右输出），$M_2$ 的漏极与 $M_4$ 及共源共栅管 $M_5$ 相连（左输出）；$M_3$–$M_6$ 的栅极偏置固定。
- 由于 P 是虚地（virtual ground），正的 $v_{in1}$ 使 PMOS $M_1$ 的电流减小 $g_{m1}v_{in1}$，从而使 $M_6$ 的电流增大、右输出下降；对称地，左输出上升，因此 $V_{out} = V_{left} - V_{right}$ 增大。
- 每个输出端的输出电阻（output resistance）：$R_D$ 与共源共栅管的 $R_{cas}$ 并联，其中共源共栅管由 $r_{O1}\|r_{O3}$ 构成源极负反馈（source degeneration）；短路跨导（short-circuit transconductance）≈ $g_{m1}$。
