可以把 PMOS 器件的衬底（bulk）端用作输入端。考虑 [图 1] 所示的放大器：输入 $V_{in}$ 通过图中的虚线连接加在 $M_1$ 和 $M_2$ 的 n 阱（即衬底）上，这两个管子的源极接 $V_{DD}$，栅极接偏置电压 $V_{b1}$；$M_3$ 和 $M_4$ 是由 $V_{b2}$ 偏置的 NMOS 电流源（current source）。计算输入参考热噪声电压（input-referred thermal noise voltage），并与偏置电流相同、以 NMOS 电流源为负载的普通（栅极输入）PMOS 差分对（differential pair）的结果相比较。将每个 MOSFET 的沟道热噪声（channel thermal noise）建模为谱密度为 $4kT\gamma_n g_m$ 的漏极噪声电流，其中 $\gamma_n = 2/3$。

器件参数：PMOS 管 $V_{TH0} = -0.8$ V，体效应系数（body-effect coefficient）为 $0.4\ \mathrm{V^{1/2}}$，$2|\phi_F| = 0.8$ V。
