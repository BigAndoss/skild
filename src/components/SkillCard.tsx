import { Link } from "@tanstack/react-router";
import {
	ArrowBigUp,
	ArrowUpRight,
	Bookmark,
	Copy,
	MessageSquare,
} from "lucide-react";

export const SkillCard = ({
	authorEmail,
	category,
	createdAt,
	description,
	installCommand,
	tags,
	title,
}: SkillRecord) => {
	return (
		<article className="skill-card">
			<Link
				to="/skills"
				tabIndex={-1}
				aria-label={`Open ${title}`}
				className="overlay"
			></Link>
			<div className="chrome">
				<div className="chrome-bar">
					<div className="lights">
						<div className="light red" />
						<div className="light amber" />
						<div className="light green" />
					</div>
					<div className="host">registry.sh</div>
				</div>
			</div>
			<div className="body">
				<div className="meta">
					<div className="author">
						<img
							src="https://icon.icepanel.io/Technology/svg/React.svg"
							alt="author avater"
							className="avatar"
						/>
						<div className="author-copy">
							<p>Andoss</p>
							<p>
								{createdAt
									? new Date(createdAt).toLocaleDateString()
									: "Date unavailable"}
							</p>
						</div>
					</div>
					<p className="category"> {category}</p>
				</div>
				<div className="summary">
					<Link to="/skills" className="title-link">
						<h3> {title}</h3>
					</Link>
					<p className="description"> {description}</p>
				</div>
				<div className="command">
					<div className="command-copy">
						<span className=""> {"<_"}</span>
						<p> {installCommand}</p>
					</div>
					<button
						type="button"
						className="copy"
						onClick={() => navigator.clipboard.writeText(installCommand)}
						aria-label="Copy install command"
					>
						<Copy />
					</button>
				</div>
				<div className="footer">
					<div className="stats">
						<button type="button" className="upvote" disabled>
							<ArrowBigUp size={16} fill="currentColor" />
							<span> {tags.length}</span>
						</button>
						<div className="comments">
							<MessageSquare size={14} />
							<span> {authorEmail ? 1 : 0}</span>
						</div>
					</div>
					<div className="actions">
						<Link to="/skills" className="open" title={`Open ${title}`}>
							<span>Open</span>
							<ArrowUpRight size={14} />
						</Link>
						<button
							type="button"
							className="save"
							aria-label="Saved state"
							disabled
						>
							<Bookmark size={16} />
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};
