module.exports = {

    addAbility: (req, res) => {
        const { id, abilityContent, rating } = req.body,
            db = req.app.get('db');

        db.abilities.add_ability(id, abilityContent, rating)
            .then(() => res.sendStatus(200))
            .catch((err) => res.status(500).send(err));
    },
    getAbility: (req, res) => {
        const { id } = req.params,
            db = req.app.get('db');

        db.abilities.get_ability(id)
            .then((abilities) => res.status(200).send(abilities))
            .catch((err) => res.status(500).send(err));
    },
    deleteAbility: (req, res) => {
        const { id } = req.params,
            db = req.app.get('db');

        db.abilities.delete_ability(id)
            .then(() => res.sendStatus(200))
            .catch((err) => res.status(500).send(err));
    }
}
